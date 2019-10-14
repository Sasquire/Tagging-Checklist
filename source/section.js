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
