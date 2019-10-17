function append_section (node) {
	document.getElementById('record_table_body').appendChild(node);
}

function make_raw (settings, ...nodes) {
	const section = document.createElement('tr');

	// Create header on the left
	const header = document.createElement('td');
	header.textContent = settings.title;
	section.appendChild(header);

	// Create buttons on the right
	const buttons = document.createElement('td');
	nodes.forEach(e => buttons.appendChild(e));
	section.appendChild(buttons);

	return section;
};

function section (options, ...nodes) {
	append_section(make_raw(options, ...nodes));
}

module.exports = {
	create: section
};
