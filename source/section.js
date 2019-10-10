const { set_node_class } = require('./utils.js');

function append_section (node) {
	const spacer = document.getElementsByClassName('spacer-row')[0];
	spacer.parentNode.insertBefore(node, spacer);
}

function make_raw (settings, ...nodes) {
	if (typeof settings === 'string') {
		settings = {
			title: settings,
			requires: ''
		};
	}

	settings.title = settings.title || '';
	settings.requires = settings.requires || '';

	const section = document.createElement('tr');
	section.classList.add('hidable');
	section.dataset.requires = settings.requires;

	// Create header on the left
	const header = document.createElement('td');
	header.innerText = settings.title;
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

function create_section (settings, ...nodes) {
	append_section(make_raw(settings, ...nodes));
}

function question_section (settings, ...nodes) {
	const section = make_raw(settings, ...nodes);
	section.classList.add('question');
	append_section(section);
}

module.exports = {
	create: create_section,
	question: question_section
};
