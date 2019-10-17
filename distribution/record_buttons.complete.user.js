// ==UserScript==
// @name         e621 Complete Record buttons
// @description  Will add clickable buttons on the user record page to make issuing records quicker
// @version      1.002.001
// @author       idem

// @license      Unlicense (2019)

// @namespace    https://github.com/Sasquire/
// @supportURL   https://e621.net/user/show/170289

// @match        *://e621.net/user_record/create?user_id=*
// ==/UserScript==

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./initial.js');

require('./simple_test.js');

},{"./initial.js":2,"./simple_test.js":3}],2:[function(require,module,exports){
const Init = require('./../../source/init.js');

Init.everything();

},{"./../../source/init.js":6}],3:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');

Section.create(
	'Sampletext',
	...[{
		title: 'Solicitation',
		records: '[[e621:rules#solicitation|Solicitation]]'
	}, {
		title: 'Spamming or Trolling',
		records: '[[e621:rules#spamming|Spamming or Trolling]]'
	}, {
		title: 'Tagging Abuse / Tagging Vandalism',
		records: '[[e621:rules#taggingabuse|Tagging Abuse / Tagging Vandalism]]'
	}, {
		title: 'fun',
		records: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9'
		]
	}].map(Tag.button)
);

},{"./../../source/nodes/nodes.js":10,"./../../source/section.js":12}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
module.exports = (text) => {
	document.getElementById('user_record_body').value += text;
};

},{}],6:[function(require,module,exports){
const css_string = require('./style.css');
const { add_style } = require('./../dependencies/add_style.js');

function remove_toJSON () {
	delete Object.prototype.toJSON;
	delete Date.prototype.toJSON;
	delete String.prototype.toJSON;
	delete Array.prototype.toJSON;
	delete Number.prototype.toJSON;
}

function init_css () {
	add_style(css_string);
}

function init_html () {
	document.getElementById('content').innerHTML += `
	<table id="record_table">
		<thead>
			<tr>
				<td>Section Title</td>
				<td>Section Buttons</td>
			</tr>
		</thead>
		<tbody id="record_table_body"></tbody>
	</table>
	`;
}

function init_everything () {
	init_html();
	remove_toJSON();
	init_css();
}

module.exports = {
	everything: init_everything
};

},{"./../dependencies/add_style.js":4,"./style.css":13}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
const add_record = require('./../add_record.js');
const { random_from_node } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_button (options) {
	const button = document.createElement('button');
	button.type = 'button';

	// Custom data values
	button.dataset.records = JSON.stringify(options.records);
	button.textContent = options.title;

	button.addEventListener('click', apply_record);

	return button;
}

function apply_record (event) {
	event.preventDefault();
	const button = event.target;

	const record = random_from_node(button);
	add_record(record);
}

function button (options) {
	options = standardize(options);
	return create_button(options);
}

module.exports = {
	button: button
};

},{"./../add_record.js":5,"./../utils.js":14,"./standardize_options.js":11}],9:[function(require,module,exports){
const add_record = require('./../add_record.js');
const { random_from_node } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_dummy_option (info) {
	return {
		title: info.title,
		records: ['']
	};
}

function create_select (info, ...options) {
	const select = document.createElement('select');
	select.name = info.title;

	[create_dummy_option(info)]
		.concat(options)
		.map(create_option)
		.forEach(e => select.appendChild(e));

	select.addEventListener('change', apply_records);

	return select;
}

function create_option (options) {
	const node = document.createElement('option');

	node.dataset.records = JSON.stringify(options.records);
	node.textContent = options.title;

	return node;
}

function apply_records (event) {
	const select = event.target;
	const selected = select.options[select.selectedIndex];

	const record = random_from_node(selected);
	add_record(record);

	select.selectedIndex = 0; // Reset
}

function list (title, ...others) {
	title = standardize(title);
	others = others.map(standardize);

	return create_select(title, ...others);
}

module.exports = {
	list: list
};

},{"./../add_record.js":5,"./../utils.js":14,"./standardize_options.js":11}],10:[function(require,module,exports){
const elements = require('./elements.js');
const generic_buttons = require('./generic_buttons.js');
const lists = require('./lists.js');

module.exports = {
	...generic_buttons,
	...lists,
	...elements
};

},{"./elements.js":7,"./generic_buttons.js":8,"./lists.js":9}],11:[function(require,module,exports){
function standardize_options (options) {
	// options.title <String>
	// options.records <String[]>

	if (!options.title || !options.records) {
		throw new Error('title and records must both be defined');
	}

	if (typeof options.records === 'string') {
		options.records = [options.records];
	}

	return options;
}

module.exports = {
	standardize: standardize_options
};

},{}],12:[function(require,module,exports){
function append_section (node) {
	document.getElementById('record_table_body').appendChild(node);
}

function make_raw (settings, ...nodes) {
	const section = document.createElement('tr');

	// Create header on the left
	const header = document.createElement('td');
	header.textContent = settings;
	section.appendChild(header);

	// Create buttons on the right
	const buttons = document.createElement('td');
	nodes.forEach(e => buttons.appendChild(e));
	section.appendChild(buttons);

	return section;
};

// options is a string for the title
function section (options, ...nodes) {
	append_section(make_raw(options, ...nodes));
}

module.exports = {
	create: section
};

},{}],13:[function(require,module,exports){
module.exports = "#record_table button {\n\tmargin-right: 3px;\n\tborder-radius: 4px;\n\tborder: 1px solid black;\n\tpadding: 2px 6px;\n}\n\n#record_table input[type=text] {\n\tmargin: 0px;\n\tbox-shadow: none;\n\ttop: 0;\n\theight: 1em;\n\tborder-radius: 3px;\n\tborder: 1px solid black;\n\tpadding: 2px;\n}\n\n#record_table select {\n\tborder-radius: 3px;\n\tbox-shadow: none;\n\tmargin-top: 0;\n\ttop: 0;\n\tpadding: 0px;\n\tborder: 1px solid black;\n}\n\n#record_table td { padding-bottom: 1em; }\n\n/* Bold the title of sections */\n#record_table td:first-child { font-weight: 700; }\n";

},{}],14:[function(require,module,exports){
function random_from_array (array) {
	return array[Math.floor(Math.random() * array.length)];
}

function random_from_node (node) {
	return random_from_array(JSON.parse(node.dataset.records));
}

module.exports = {
	random_from_node: random_from_node
};

},{}]},{},[1]);
