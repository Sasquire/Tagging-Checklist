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
