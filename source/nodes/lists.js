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
