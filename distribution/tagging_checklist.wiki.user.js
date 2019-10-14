// ==UserScript==
// @name         e621 Wiki Tagging Checklist
// @description  Framework and Implementation of a tagging checklist to upload form of e621
// @version      1.002.002
// @author       idem

// @license      Unlicense (2019)

// @namespace    https://github.com/Sasquire/
// @supportURL   https://e621.net/user/show/170289
// @downloadURL  https://raw.githubusercontent.com/Sasquire/Tagging-Checklist/master/distribution/tagging_checklist.wiki.user.js

// @match        *://e621.net/post/upload
// ==/UserScript==

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./initial.js');
require('./meat.js');
require('./final.js');

},{"./final.js":2,"./initial.js":3,"./meat.js":4}],2:[function(require,module,exports){
const Requires = require('./../../source/requires.js');
const Tags = require('./../../source/modify_tags/modify_tags.js');

Requires.apply(Tags.all());

},{"./../../source/modify_tags/modify_tags.js":8,"./../../source/requires.js":16}],3:[function(require,module,exports){
const Init = require('./../../source/init.js');

Init.everything();
Init.sources('https://twitter.com/e621dotnet\nhttps://google.com\nLimit of 10. Use them!');
Init.description('If you can not think of a description, use the artists description!');
Init.parent_id('Ex. 6268');
Init.rating();

},{"./../../source/init.js":6}],4:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');
const SetOperations = require('./../../source/set_operations.js');

Section.create(
	'Artist',
	Tag.custom('Artist'),
	Tag.br(),
	Tag.label5('The artist of the image')
);

Section.create(
	'Copyright',
	Tag.custom('Copyright'),
	Tag.br(),
	Tag.label5('The original series or company a character or game is owned by')
);

Section.create(
	'Character',
	Tag.custom('Character Name'),
	Tag.label5('Tag the character\'s best known name. If not that, their full name')
);

Section.create(
	'Body Type',
	...[
		'anthro',
		'semi_anthro',
		'feral',
		'humanoid',
		'taur',
		'anthrofied',
		'ponified',
		'feralized'].map(Tag.button)
);

Section.create(
	'Species',
	...[
		'human',
		'canine',
		'feline',
		'bovine',
		'cervine',
		'equine',
		'lagomorph',
		'rodent',
		'avian',
		'insect',
		'marine',
		'cetacean',
		'shark',
		'scalie'].map(Tag.button),
	Tag.br(),
	Tag.label5('or do it yourself because you know it'),
	Tag.br(),
	Tag.custom('Species')
);

Section.create(
	'Sexes',
	...[
		'ambiguous_gender',
		'male',
		'female',
		'intersex',
		'gynomorph',
		'andromorph',
		'herm',
		'maleherm',
		// adding these terms for those that forget
		// what e621 has switched to.
		'cuntboy',
		'dickgirl'].map(Tag.button),
	Tag.br(),
	Tag.label5(Tag.url(
		'For the love of god, TWYS not TWYK',
		'https://e621.net/wiki/show/howto:tag_genders'
	))
);

// This creates something very not
// pretty, and will be fixed in the
// next version. For now the feature
// is just dissabled. Hope for it soon
Section.create(
	'Sex Pairings',
	...SetOperations.self_half_cross([
		'ambiguous_gender',
		'male',
		'female',
		'intersex',
		'gynomorph',
		'andromorph',
		'herm',
		'maleherm',
		'cuntboy',
		'dickgirl'])
		.map(e => Tag.button({
			tags: [e.join('/')],
			requires: e.join(' ')
		}))
);

Section.create(
	'How many',
	...[
		'none_pictured',
		'solo',
		'duo',
		'group'].map(Tag.button)
);

Section.create(
	'Focus',
	...[
		'solo_focus',
		'duo_focus'].map(Tag.button),
	Tag.br(),
	Tag.label5('Solo focus can not have Solo. Duo focus can not have Duo')
);

Section.create(
	'Clothing',
	...[
		'fully_clothed',
		'partially_clothed',
		'skimpy',
		'nude',
		'bottomless',
		'topless',
		'underwear',
		'open_shirt'].map(Tag.button)
);

Section.create(
	'Location',
	...[
		'inside',
		'outside',
		'bedroom',
		'kitchen',
		'forest',
		'beach'].map(Tag.button)
);

Section.create(
	'Male Genitalia',
	...[
		'penis',
		'balls',
		'sheath',
		'knot',
		'erection',
		'half-erect',
		'flaccid',
		'humanoid_penis',
		'equine_penis',
		'canine_penis',
		'tapering_penis',
		'veiny_penis',
		'uncut',
		'circumcised'].map(Tag.button)
);

Section.create(
	'Female Genitalia',
	...[
		'pussy',
		'clitoris',
		'plump_labia',
		'humanoid_pussy',
		'equine_pussy',
		'canine_pussy'].map(Tag.button)
);

Section.create(
	'Common Genitalia',
	...[
		'butt',
		'anus',
		'puffy_anus',
		'gaping_anus',
		'urethra',
		'genital_slit'].map(Tag.button)
);

Section.create(
	'Sex Act',
	Tag.button('sex'),
	...[
		'masturbation',
		'handjob',
		'footjob',
		'fellatio',
		'cunnilingus',
		'vaginal_penetration',
		'anal_penetration',
		'threesome',
		'foursome',
		'orgy',
		'gangbang',
		'frottage',
		'tribadism',
		'orgasm',
		'cum_inside'].map(Tag.button)
);

Section.create(
	'Position',
	...[
		'missionary_position',
		'cowgirl_position',
		'reverse_cowgirl_position',
		'from_behind',
		'69_position',
		'stand_and_carry_position'].map(Tag.button),
	Tag.br(),
	Tag.label5(Tag.url(
		'For more positions',
		'https://e621.net/wiki/show/tag_group:sex_positions'
	)),
	Tag.br(),
	Tag.custom('custom_position')
);

Section.create(
	'Limbs',
	...[
		'crossed_arms',
		'raised_arms',
		'arms_behind_head',
		'spread_legs',
		'crossed_legs',
		'raised_leg',
		'legs_up',
		'raised_tail',
		'tailwag'].map(Tag.button)
);

Section.create(
	'Gaze',
	...[
		'looking_at_viewer',
		'looking_back',
		'eye_contact',
		'eyes_closed'].map(Tag.button)
);

Section.create(
	'Expression',
	...[
		'blush',
		'wink',
		'smile',
		'grin',
		'tongue_out',
		'naughty_face',
		'embarrassed',
		'happy',
		'sad',
		'bedroom_eyes'].map(Tag.button)
);

Section.create(
	'Medium',
	...[
		'sketch',
		'line_art',
		'monochrome',
		'shaded',
		'pencil_(artwork)',
		'watercolor',
		'3D',
		'digital_media_(artwork)'].map(Tag.button)
);

Section.create(
	'Organization',
	...[
		'comic',
		'multiple_scenes',
		'sequence',
		'close-up',
		'portrait',
		'pinup',
		'wallpaper'].map(Tag.button)
);

Section.create(
	'Style',
	...[
		'toony',
		'detailed',
		'realistic'].map(Tag.button)
);

Section.create(
	'Text and Language',
	...[
		'english_text',
		'japanese_text',
		'spanish_text',
		'runes',
		'dialogue',
		'speech_bubble',
		'symbol'].map(Tag.button)
);

Section.create(
	'Requests',
	...[
		'translation_request',
		'source_request',
		'tagme'].map(Tag.button)
);

Section.create(
	'Year of Creation',
	...[
		'2019',
		'2018',
		'2017',
		'2016'].map(Tag.button),
	Tag.custom('millennia old')
);

},{"./../../source/nodes/nodes.js":14,"./../../source/section.js":17,"./../../source/set_operations.js":18}],5:[function(require,module,exports){
function add_style (css) {
	const node = document.createElement('style');
	node.type = 'text/css';
	node.textContent = css;

	const head = document.head;
	const body = document.body;
	head ? head.appendChild(node) : body.appendChild(node);
}

module.exports = {
	add_style: add_style
};

},{}],6:[function(require,module,exports){
const { remove_tag_with_regex, set_node_class } = require('./utils.js');
const Section = require('./section.js');
const Tag = require('./nodes/nodes.js');
const css_string = require('./style.css');
const { add_style } = require('./../dependencies/add_style.js');

function move_rating () {
	const old_node = document.getElementById('post_rating_explicit').parentNode;
	old_node.parentNode.remove();

	Section.create(
		'Rating',
		...old_node.children,
		Tag.label5(Tag.url(
			'Don\'t forget it!',
			'https://e621.net/help/show/ratings'
		))
	);

	const new_row = document.getElementById('post_rating_explicit').parentNode.parentNode;

	Array.from(new_row.querySelectorAll('label')).forEach(add_br_after);
	Array.from(new_row.querySelectorAll('input'))
		.forEach(e => {
			e.addEventListener('change', () => {
				set_node_class(new_row, 'highlighted', true);
			});
		});

	function add_br_after (node) {
		const br = document.createElement('br');
		const next = node.nextSibling;
		const parent = node.parentNode;
		parent.insertBefore(br, next);
	}
}

function generic_replace (old_id, new_title, new_placeholder) {
	const old_node = document.getElementById(old_id);
	old_node.parentNode.parentNode.remove();

	old_node.placeholder = new_placeholder;

	Section.create(
		new_title,
		old_node
	);

	old_node.addEventListener('change', () => {
		set_node_class(old_node.parentNode.parentNode, 'highlighted', true);
	});
}

function move_sources (new_placeholder) {
	generic_replace(
		'post_source',
		'Sources',
		new_placeholder
	);
}

function move_description (new_placeholder) {
	generic_replace(
		'post_description',
		'Description',
		new_placeholder
	);
}

function move_parent_id (new_placeholder) {
	generic_replace(
		'post_parent_id',
		'Parent Id',
		new_placeholder
	);
}

function remove_blurbs () {
	remove_tag_with_regex('p', /.*Explicit tags include.*/gu);
	remove_tag_with_regex('p', /.*Separate tags with.*/gu);
}

function init_css () {
	add_style(css_string);
}

function init_html () {
	const questions = document.createElement('textarea');
	questions.id = 'question_keys';
	questions.classList.add('hidden');
	document.body.appendChild(questions);
}

function init_everything () {
	init_css();
	init_html();
	remove_blurbs();
}

module.exports = {
	everything: init_everything,
	description: move_description,
	rating: move_rating,
	sources: move_sources,
	parent_id: move_parent_id
};

},{"./../dependencies/add_style.js":5,"./nodes/nodes.js":14,"./section.js":17,"./style.css":19,"./utils.js":20}],7:[function(require,module,exports){
// This module focuses on interactions with
// the post_tags element on the upload page of
// e621. In the future it should interact cleanly
// with the tags on a post's page.

const Requires = require('./../../source/requires.js');

function get () {
	return document.getElementById('post_tags')
		.value
		.split(' ')
		.filter(e => e);
}

function set (tags) {
	document.getElementById('post_tags').value = tags.join(' ');
	Requires.apply(tags);
}

function add (tags) {
	const all_new_tags = get().concat(tags);
	set(all_new_tags);
}

function remove (tags) {
	const all_new_tags = get()
		.filter(e => tags.includes(e) === false);
	set(all_new_tags);
}

module.exports = {
	get: get,
	set: set,
	add: add,
	remove: remove
};

},{"./../../source/requires.js":16}],8:[function(require,module,exports){
// This file is the interaction between the
// question tags and the final tags. This should
// be the area in which the rest of the script
// interacts with the saved and unsaved tags.

const questions = require('./question_tags.js');
const finals = require('./final_tags.js');

// The node must be passed in, and it represents
// the node from where the tags are being added.
// This is because questions are defined by a
// class attached to the button.
function modify_tags (tags, adding, node) {
	if (node.classList.contains('question')) {
		if (adding === true) {
			questions.add(tags);
		} else {
			questions.remove(tags);
		}
	} else {
		if (adding === true) {
			finals.add(tags);
		} else {
			finals.remove(tags);
		}
	}
}

function get_everything () {
	return questions.get().concat(finals.get());
}

module.exports = {
	modify: modify_tags,
	all: get_everything
};

},{"./final_tags.js":7,"./question_tags.js":9}],9:[function(require,module,exports){
// This file handles the tags present in a hidden
// element. These tags are never applied to the
// post, but can be used as specific checks for
// deciding if a section is to appear visible.

const Requires = require('./../../source/requires.js');

function get () {
	return document.getElementById('question_keys')
		.value
		.split(' ')
		.filter(e => e);
}

function set (tags) {
	document.getElementById('question_keys').value = tags.join(' ');
	Requires.apply(tags);
}

function add (tags) {
	const all_new_tags = get().concat(tags);
	set(all_new_tags);
}

function remove (tags) {
	const all_new_tags = get()
		.filter(e => tags.includes(e) === false);
	set(all_new_tags);
}

module.exports = {
	get: get,
	set: set,
	add: add,
	remove: remove
};

},{"./../../source/requires.js":16}],10:[function(require,module,exports){
const Tags = require('./../modify_tags/modify_tags.js');
const { highlight_section_of } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_custom (options) {
	const container = document.createElement('span');
	if (options.reminder) {
		container.title = options.reminder;
	}
	if (options.question) {
		container.classList.add('question');
	}

	const input = document.createElement('input');
	input.setAttribute('form', 'fake_form'); // Prevents accidental submission
	input.type = 'text';
	input.placeholder = options.title;

	const button = document.createElement('button');
	button.textContent = 'Add';
	button.type = 'button';
	button.addEventListener('click', apply_tags);

	container.appendChild(input);
	container.appendChild(button);

	return container;
}

function apply_tags (event) {
	const container = event.target.parentNode;
	const input = container.getElementsByTagName('input')[0];

	event.preventDefault(); // Prevent the form from being submitted
	Tags.modify(input.value, true, container);
	input.value = '';
	highlight_section_of(container);
}

function custom (options) {
	options = standardize(options);
	return create_custom(options);
}

module.exports = {
	custom: custom
};

},{"./../modify_tags/modify_tags.js":8,"./../utils.js":20,"./standardize_options.js":15}],11:[function(require,module,exports){
function label_generic (...text) {
	const label = document.createElement('label');
	const nodes = text.map(e => {
		if (typeof e === 'object') {
			return e;
		} else {
			const span = document.createElement('span');
			span.textContent = e;
			return span;
		}
	});

	nodes.forEach(e => label.appendChild(e));

	return label;
}

function url_elem (text, link) {
	const node = document.createElement('a');
	node.href = link;
	node.textContent = text;
	return node;
}

function br_elem () {
	return document.createElement('br');
}

const labels = {};

// Create custom label functions so they can
// be filtered based on importance. 9 is the
// most important while 0 is the least important
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(e => {
	const name = `label${e}`;
	labels[name] = (...texts) => {
		const label = label_generic(...texts);
		label.classList.add(name);
		return label;
	};
});

module.exports = {
	url: url_elem,
	br: br_elem,
	...labels
};

},{}],12:[function(require,module,exports){
const Tags = require('./../modify_tags/modify_tags.js');
const { set_node_class, highlight_section_of } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_button (options) {
	const button = document.createElement('button');
	button.type = 'button';
	button.classList.add('hidable');

	// Custom data values
	button.dataset.tags = options.tags.join(' ');
	button.dataset.requires = options.requires;
	button.textContent = options.title;

	if (options.reminder) {
		button.title = options.reminder;
	}
	if (options.question) {
		button.classList.add('question');
	}

	button.addEventListener('click', apply_tags);

	return button;
}

function apply_tags (event) {
	event.preventDefault();
	const button = event.target;

	let is_lit = button.classList.contains('highlighted');
	set_node_class(button, 'highlighted', !is_lit);
	highlight_section_of(button);

	const should_add = !is_lit;
	const to_be_changed = button.dataset.tags.split(' ');
	Tags.modify(to_be_changed, should_add, button);
}

function button (options) {
	options = standardize(options);
	return create_button(options);
}

function alias (options, fake_name) {
	options = standardize(options);
	options.title = fake_name;
	return create_button(options);
}

module.exports = {
	button: button,
	alias: alias
};

},{"./../modify_tags/modify_tags.js":8,"./../utils.js":20,"./standardize_options.js":15}],13:[function(require,module,exports){
const Tags = require('./../modify_tags/modify_tags.js');
const { highlight_option_tree } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_dummy_option (info) {
	return {
		tags: [''],
		requires: '',
		title: info.title
	};
}

function create_select (info, ...options) {
	const select = document.createElement('select');
	select.name = info.title;
	select.dataset.requires = info.requires;
	if (info.reminder) {
		select.title = info.reminder;
	}
	// A select can not be a question. Its options must be questions.
	// A select can not have tags, only the options can have tags

	[create_dummy_option(info)]
		.concat(options)
		.map(create_option)
		.forEach(e => select.appendChild(e));

	select.addEventListener('change', apply_tags);

	return select;
}

function create_option (options) {
	const node = document.createElement('option');
	node.classList.add('hidable');

	node.dataset.tags = options.tags.join(' ');
	node.dataset.requires = options.requires;
	node.textContent = options.title;
	if (options.reminder) {
		node.title = options.reminder;
	}
	if (options.question) {
		node.classList.add('question');
	}

	return node;
}

function apply_tags (event) {
	const select = event.target;
	const selected = select.options[select.selectedIndex];
	const tags = selected.dataset.tags;

	Tags.modify(tags, true, selected);

	select.selectedIndex = 0; // Reset
	highlight_option_tree(select);
}

function list (title, ...others) {
	title = standardize(title);
	others = others.map(standardize);

	return create_select(title, ...others);
}

module.exports = {
	list: list
};

},{"./../modify_tags/modify_tags.js":8,"./../utils.js":20,"./standardize_options.js":15}],14:[function(require,module,exports){
const custom_tags = require('./custom_tags.js');
const elements = require('./elements.js');
const generic_buttons = require('./generic_buttons.js');
const lists = require('./lists.js');

module.exports = {
	...generic_buttons,
	...custom_tags,
	...lists,
	...elements
};

},{"./custom_tags.js":10,"./elements.js":11,"./generic_buttons.js":12,"./lists.js":13}],15:[function(require,module,exports){
function standardize_options (options) {
	// options.title <String>
	// options.tags <String[]>
	// options.requires <String>
	// options.reminder <String>
	// options.question <Boolean>

	if (typeof options === 'string') {
		options = {
			tags: [options],
			title: options
		};
	}

	if (options.title && !options.tags) {
		options.tags = [options.title];
	}

	if (options.tags === undefined) {
		throw new Error('Tags must be defined');
	}

	if (!options.title) {
		options.title = options.tags.join(' ');
	}

	options.requires = options.requires || '';

	// reminder and question are optional

	return options;
}

module.exports = {
	standardize: standardize_options
};

},{}],16:[function(require,module,exports){
const { set_node_class } = require('./utils.js');

function test_requires (requires_string, tags) {
	// "male penis; herm; female strapon"
	// Turns into
	// [
	//   ["male", "penis"],
	//   ["herm"],
	//   ["female", "strapon"]
	// ]
	const requires_object = requires_string
		.split(';')
		.filter(e => e)
		.map(e => e.split(' ').filter(p => p));

	// Where in some subset of the requires object, every tag
	// in that subset is included in the tags object.

	// Returns true when an object should be displayed
	return requires_object.some(row => row.every(tag => tags.includes(tag)));
}

// TODO: Change this function to be more efficient
function toggle_hidden_button_sections (all_tags) {
	const hidable = Array.from(document.getElementsByClassName('hidable'));

	// Reset everything
	hidable.forEach(e => e.classList.remove('hidden'));

	hidable
		.map(node => ({
			node: node,
			requires: node.dataset.requires
		}))
		.filter(e => e.requires.length !== 0) // Only check nodes that need it
		.forEach(e => optional_hide(e.node, e.requires));

	// If every node inside this section is hidden, hide the section
	hidable
		.map(node => ({
			node: node,
			type: node.nodeName
		}))
		.filter(e => e.type === 'TR')
		.forEach(e => {
			const hidable_inside = Array.from(e.node.getElementsByClassName('hidable'));
			const all_hidden = hidable_inside.every(p => p.classList.contains('hidden'));

			if (all_hidden && hidable_inside.length > 0) {
				e.node.classList.add('hidden');
			}
		});

	function optional_hide (node, requires_object) {
		const should_display = test_requires(requires_object, all_tags);
		set_node_class(node, 'hidden', !should_display);
	}
}

module.exports = {
	test: test_requires,
	apply: toggle_hidden_button_sections
};

},{"./utils.js":20}],17:[function(require,module,exports){
const { set_node_class } = require('./utils.js');

function standardize (options) {
	if (typeof options === 'string') {
		options = {
			title: options,
			requires: ''
		};
	}

	options.title = options.title || '';
	options.requires = options.requires || '';

	return options;
}

function append_section (node) {
	const spacer = document.getElementsByClassName('spacer-row')[0];
	spacer.parentNode.insertBefore(node, spacer);
}

function make_raw (settings, ...nodes) {
	const section = document.createElement('tr');
	section.classList.add('hidable');
	section.dataset.requires = settings.requires;

	// Create header on the left
	const header = document.createElement('td');
	header.textContent = settings.title;
	header.addEventListener('click', () => {
		const is_lit = header.parentNode.classList.contains('highlighted');
		set_node_class(header.parentNode, 'highlighted', !is_lit);
	});
	section.appendChild(header);

	// Create buttons on the right
	const buttons = document.createElement('td');
	nodes.forEach(e => buttons.appendChild(e));
	section.appendChild(buttons);

	return section;
};

function section (options, ...nodes) {
	options = standardize(options);
	append_section(make_raw(options, ...nodes));
}

module.exports = {
	create: section
};

},{"./utils.js":20}],18:[function(require,module,exports){
function array_cross (a1, a2) {
	const results = [];
	for (const v1 of a1) {
		for (const v2 of a2) {
			results.push([v1, v2]);
		}
	}
	return results;
}

function self_cross (arr) {
	return array_cross(arr, arr);
}

function half_array_cross (a1, a2) {
	const results = [];
	for (let i = 0; i < a1.length; i++) {
		for (let j = i; j < a2.length; j++) {
			results.push([a1[i], a2[j]]);
		}
	}
	return results;
}

function self_half_cross (arr) {
	return half_array_cross(arr, arr);
}

module.exports = {
	cross: array_cross,
	self_cross: self_cross,
	half_cross: half_array_cross,
	self_half_cross: self_half_cross
};

},{}],19:[function(require,module,exports){
module.exports = ".hidden { display: none; }\n\n.section button {\n\tmargin-right: 3px;\n\tborder-radius: 4px;\n\tborder: 1px solid black;\n\tpadding: 2px 6px;\n}\n\n.section input[type=text] {\n\tmargin: 0px;\n\tbox-shadow: none;\n\ttop: 0;\n\theight: 1em;\n\tborder-radius: 3px;\n\tborder: 1px solid black;\n\tpadding: 2px;\n}\n\n.section select {\n\tborder-radius: 3px;\n\tbox-shadow: none;\n\tmargin-top: 0;\n\ttop: 0;\n\tpadding: 0px;\n\tborder: 1px solid black;\n}\n\n.highlighted {\n\tbackground-color: #288233; /* e621 approval green */\n\tcolor: white;\n}\n\n.section td { padding-bottom: 1em; }\n\n/* Bold the title of sections */\n.section td:first-child { font-weight: 700; }\n\n#upload_preview_img {\n\tposition: fixed;\n\tmax-width: 50vw;\n\tright: 0px;\n\ttop: 50px;\n\tmax-height: 50vh;\n\toverflow: initial;\n\tborder: 1px solid white;\n}";

},{}],20:[function(require,module,exports){
// Filled with small utilities that are useful
// across multiple different files

function highlight_section_of (child_node) {
	child_node.parentNode.parentNode.classList.add('highlighted');
}

function set_node_class (node, classname, should) {
	if (should) {
		node.classList.add(classname);
	} else {
		node.classList.remove(classname);
	}
}

function highlight_option_tree (node) {
	highlight_section_of(node);
	node.classList.add('highlighted');
}

function find_nodes_with_regex (type, regex) {
	return Array.from(document.getElementsByTagName(type))
		.filter(e => regex.test(e.textContent));
}

function remove_tag_with_regex (type, regex) {
	find_nodes_with_regex(type, regex)
		.forEach(e => e.parentNode.parentNode.remove());
}

module.exports = {
	highlight_section_of: highlight_section_of,
	set_node_class: set_node_class,
	highlight_option_tree: highlight_option_tree,
	find_nodes_with_regex: find_nodes_with_regex,
	remove_tag_with_regex: remove_tag_with_regex
};

},{}]},{},[1]);
