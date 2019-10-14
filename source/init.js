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
