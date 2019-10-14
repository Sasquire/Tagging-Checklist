// ==UserScript==
// @name         e621 Complete Tagging Checklist
// @description  Framework and Implementation of a tagging checklist to upload form of e621
// @version      1.002.001
// @author       idem

// @license      Unlicense (2019)

// @namespace    https://github.com/Sasquire/
// @supportURL   https://e621.net/user/show/170289
// @downloadURL  https://raw.githubusercontent.com/Sasquire/Tagging-Checklist/master/distribution/tagging_checklist.complete.user.js

// @match        *://e621.net/post/upload
// ==/UserScript==

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');
const SetOperations = require('./../../source/set_operations.js');
const Constants = require('./../../source/constants.js');

Section.create(
	{
		title: 'Male Genitalia',
		requires: 'male; gynomorph; herm; maleherm'
	},
	...[
		'penis',
		'balls',
		'sheath'].map(Tag.button)
);

Section.create(
	{
		title: 'Multiple Penises on One Character',
		requires: 'penis'
	},
	Tag.button('multi_penis')
);

Section.create(
	{
		title: 'Penis Features',
		requires: 'penis'
	},

	Tag.list(
		'Penis Size',
		'micro_penis',
		'small_penis',
		{ title: 'normal_penis', tags: [] },
		'large_penis',
		'huge_penis',
		'hyper_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Thickness',
		'thin_penis',
		{ title: 'normal_penis', tags: [] },
		'thick_penis',
		'hyper_thick_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Length',
		'short_penis',
		{ title: 'normal_penis', tags: [] },
		'long_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Color',
		...SetOperations.cross(Constants.colors, ['_penis'])
			.map(e => e.join(''))
	),

	Tag.br(),

	Tag.list(
		'Penis Texture',
		'barbed_penis',
		'ridged_penis',
		'veiny_penis',
		'ribbed_penis',
		'nubbed_penis',
		'spiked_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Type',
		'humanoid_penis',
		'equine_penis',
		{ tags: ['knotted_equine_penis'], requires: 'knot' },
		{ tags: ['knotted_humanoid_penis'], requires: 'knot' },
		'canine_penis',
		'cetacean_penis',
		'feline_penis',
		'anatomically_correct_penis',
		'hybrid_penis',
		'unusual_penis'
	),

	Tag.br(),

	Tag.list(
		'Erection Status',
		'flaccid',
		'half-erect',
		'erection'
	)
);

Section.create(
	{
		title: 'Penis Head Features',
		requires: 'penis'
	},
	...[
		'flared_penis',
		'tapering_penis',

		'uncut',
		'circumcised'].map(Tag.button)

);

},{"./../../source/constants.js":7,"./../../source/nodes/nodes.js":16,"./../../source/section.js":19,"./../../source/set_operations.js":20}],2:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');

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
		'maleherm'].map(Tag.button),

	// Adding these terms for those that forget
	// what e621 has switched to.
	Tag.alias('cuntboy', 'andromorph'),
	Tag.alias('dickgirl', 'gynomorph')
);

},{"./../../source/nodes/nodes.js":16,"./../../source/section.js":19}],3:[function(require,module,exports){
require('./initial.js');

require('./Sexes.js');
require('./Male_Genitalia.js');

require('./final.js');

},{"./Male_Genitalia.js":1,"./Sexes.js":2,"./final.js":4,"./initial.js":5}],4:[function(require,module,exports){
const Init = require('./../../source/init.js');
const Requires = require('./../../source/requires.js');
const Tags = require('./../../source/modify_tags/modify_tags.js');

Init.rating();
Init.parent_id('Ex. 6268');
Requires.apply(Tags.all());

},{"./../../source/init.js":8,"./../../source/modify_tags/modify_tags.js":10,"./../../source/requires.js":18}],5:[function(require,module,exports){
const Init = require('./../../source/init.js');
const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');

Init.everything();
Init.sources('https://twitter.com/e621dotnet\nhttps://google.com\nLimit of 10. Use them!');
Init.description('If you can not think of a description, use the artists description!');

Section.create(
	'Artist',
	Tag.custom('Artist\'s name'),
	Tag.label5(
		'Tag the artist! If you\'re the artist, add your name!',
		Tag.br(),
		'Don\'t know who the artist is? Tag ',
		Tag.url('unknown_artist', 'https://e621.net/wiki/show/unknown_artist'),
		'!',
		Tag.br(),
		'Maybe they want to be an ',
		Tag.url('anonymous_artist', 'https://e621.net/wiki/show/anonymous_artist'),
		'?'
	)
);

},{"./../../source/init.js":8,"./../../source/nodes/nodes.js":16,"./../../source/section.js":19}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
const Constants = {};

Constants.sexes = [
	'ambiguous_gender',
	'male',
	'female',
	'intersex',
	'gynomorph',
	'andromorph',
	'herm',
	'maleherm'
];

Constants.colors = [
	'black',
	'grey',
	'white',

	'beige',
	'blue',
	'brown',
	'cyan',
	'green',
	'lavender',
	'magenta',
	'maroon',
	'mint',
	'navy',
	'orange',
	'pink',
	'purple', //
	'red',
	'yellow',
	'teal',

	'rainbow',
	'transparent',
	'translucent',
	'glowing',
	'two_tone',
	'glistening',

	'molted' // Think spots on cow
];

module.exports = Constants;

},{}],8:[function(require,module,exports){
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

},{"./../dependencies/add_style.js":6,"./nodes/nodes.js":16,"./section.js":19,"./style.css":21,"./utils.js":22}],9:[function(require,module,exports){
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

},{"./../../source/requires.js":18}],10:[function(require,module,exports){
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

},{"./final_tags.js":9,"./question_tags.js":11}],11:[function(require,module,exports){
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

},{"./../../source/requires.js":18}],12:[function(require,module,exports){
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

},{"./../modify_tags/modify_tags.js":10,"./../utils.js":22,"./standardize_options.js":17}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"./../modify_tags/modify_tags.js":10,"./../utils.js":22,"./standardize_options.js":17}],15:[function(require,module,exports){
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

},{"./../modify_tags/modify_tags.js":10,"./../utils.js":22,"./standardize_options.js":17}],16:[function(require,module,exports){
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

},{"./custom_tags.js":12,"./elements.js":13,"./generic_buttons.js":14,"./lists.js":15}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{"./utils.js":22}],19:[function(require,module,exports){
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

},{"./utils.js":22}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
module.exports = ".hidden { display: none; }\n\n.section button {\n\tmargin-right: 3px;\n\tborder-radius: 4px;\n\tborder: 1px solid black;\n\tpadding: 2px 6px;\n}\n\n.section input[type=text] {\n\tmargin: 0px;\n\tbox-shadow: none;\n\ttop: 0;\n\theight: 1em;\n\tborder-radius: 3px;\n\tborder: 1px solid black;\n\tpadding: 2px;\n}\n\n.section select {\n\tborder-radius: 3px;\n\tbox-shadow: none;\n\tmargin-top: 0;\n\ttop: 0;\n\tpadding: 0px;\n\tborder: 1px solid black;\n}\n\n.highlighted {\n\tbackground-color: #288233; /* e621 approval green */\n\tcolor: white;\n}\n\n.section td { padding-bottom: 1em; }\n\n/* Bold the title of sections */\n.section td:first-child { font-weight: 700; }\n\n#upload_preview_img {\n\tposition: fixed;\n\tmax-width: 50vw;\n\tright: 0px;\n\ttop: 50px;\n\tmax-height: 50vh;\n\toverflow: initial;\n\tborder: 1px solid white;\n}";

},{}],22:[function(require,module,exports){
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

},{}]},{},[3]);
