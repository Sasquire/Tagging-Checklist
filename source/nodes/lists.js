const add_record = require('./../add_record.js');
const { random_from_node } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_dummy_option (title) {
	return {
		title: title,
		records: ['']
	};
}

function create_select (title, ...options) {
	const select = document.createElement('select');
	select.name = title;

	[create_dummy_option(title)]
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
	others = others.map(standardize);

	return create_select(title, ...others);
}

module.exports = {
	list: list
};
