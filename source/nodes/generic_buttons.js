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
