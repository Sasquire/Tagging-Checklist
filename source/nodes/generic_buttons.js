const Tags = require('./../modify_tags/modify_tags.js');
const { highlight_section_of, set_node_class } = require('./../utils.js');

function apply_tags (event) {
	event.preventDefault();
	const node = event.target;

	let is_lit = node.classList.contains('highlighted');
	set_node_class(node, 'highlighted', !is_lit);
	highlight_section_of(node);

	const should_add = !is_lit;
	const to_be_changed = node.dataset.tags.split(' ');
	Tags.modify(to_be_changed, should_add, node.parentNode.parentNode);
}

function create_button (settings) {
	if (settings.tags === undefined) {
		throw new Error('Tags must be defined when creating a button');
	}

	settings.title = settings.title || settings.tags[0];
	settings.requires = settings.requires || '';

	const button = document.createElement('button');
	button.type = 'button';
	button.classList.add('hidable');

	// Custom data values
	button.dataset.tags = settings.tags.join(' ');
	button.innerText = settings.title;
	button.dataset.requires = settings.requires;

	button.addEventListener('click', apply_tags);

	return button;
}

function button (settings_name) {
	if (typeof settings_name === 'string') {
		settings_name = { tags: [settings_name] };
	}

	return create_button(settings_name);
};

function alias (title, actual) {
	return create_button({
		title: title,
		tags: [actual]
	});
};

module.exports = {
	button: button,
	alias: alias
};
