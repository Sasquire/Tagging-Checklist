const Tags = require('./../modify_tags/modify_tags.js');
const { highlight_section_of } = require('./../utils.js');

function custom_tag (title) {
	const container = document.createElement('span');

	const input = document.createElement('input');
	input.setAttribute('form', 'fake_form'); // Prevents accidental submission
	input.type = 'text';
	input.placeholder = title;

	const button = document.createElement('button');
	button.innerText = 'Add';
	button.type = 'button';
	button.addEventListener('click', apply_tags);

	container.appendChild(input);
	container.appendChild(button);

	return container;
};

function apply_tags (event) {
	const container = event.target.parentNode;
	const input = container.getElementsByTagName('input')[0];

	event.preventDefault(); // Prevent the form from being submitted
	Tags.modify(input.value, true, container.parentNode.parentNode);
	input.value = '';
	highlight_section_of(container);
}

module.exports = {
	custom: custom_tag
};
