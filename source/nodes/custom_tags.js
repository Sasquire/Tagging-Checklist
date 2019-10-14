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
