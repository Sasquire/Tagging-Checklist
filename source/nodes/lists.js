const Tags = require('./../modify_tags/modify_tags.js');
const { highlight_section_of, set_node_class } = require('./../utils.js');

function create_list (settings, ...options) {
	[settings, options] = clean_settings(settings, ...options);
	return build_select(settings, ...options);
};

function clean_settings (settings, ..._options) {
	settings.title = settings.title || '';
	settings.requires = settings.requires || '';

	const options = [];
	for (const setting of _options) {
		if (!setting.tags) {
			throw new Error('tags must be present on a setting');
		}

		setting.title = setting.title || setting.tags[0];
		setting.requires = setting.requires || '';

		options.push(setting);
	}

	return [settings, options];
}

function build_select (settings, ...options) {
	const select = document.createElement('select');
	select.name = settings.title;
	select.appendChild(create_option({
		tags: [''],
		requires: '',
		title: settings.title
	}));

	options
		.map(create_option)
		.forEach(e => select.appendChild(e));

	select.addEventListener('change', apply_tags);

	return select;
}

function create_option (opt) {
	const option = document.createElement('option');
	option.classList.add('hidable');
	option.dataset.tags = opt.tags.join(' ');
	option.dataset.requires = opt.requires;
	option.innerText = opt.title;
	return option;
}

function apply_tags (event) {
	const select = event.target;
	const selected = select.options[select.selectedIndex];
	const tags = selected.dataset.tags;
	Tags.modify(tags, true, select.parentNode.parentNode);
	select.selectedIndex = 0; // Reset
	set_node_class(select, 'highlighted', true);
	highlight_section_of(select);
}

function list (title, ...others) {
	if (typeof title === 'string') {
		title = { title: title };
	}

	others = others.map(e => {
		if (typeof e === 'string') {
			e = { tags: [e] };
		}

		return e;
	});

	return create_list(title, ...others);
};

module.exports = {
	list: list
};
