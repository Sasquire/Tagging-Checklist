function create_section (title, link, default_reasons, ...reasons) {
	reasons = reasons
		.map(e => `* ${default_reasons[e]}`)
		.join('\n');

	return `
[section=${title}]
[b]This category includes:[/b]

${reasons}

"[Code of Conduct - ${title}]":${link}
[/section]`;
}

function init (title, link, default_reasons) {
	function create_specific (...reasons) {
		return create_section(title, link, default_reasons, ...reasons);
	}

	return create_specific;
}

module.exports = init;
