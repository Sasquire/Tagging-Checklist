function standardize_options (options) {
	// options.title <String>
	// options.tags <String[]>
	// options.requires <String>
	// options.reminder <String>
	// options.question <Boolean>

	if (typeof options === 'string') {
		options = {
			tags: [options],
			title: options
		};
	}

	if (options.title && !options.tags) {
		options.tags = [options.title];
	}

	if (options.tags === undefined) {
		throw new Error('Tags must be defined');
	}

	if (!options.title) {
		options.title = options.tags.join(' ');
	}

	options.requires = options.requires || '';

	// reminder and question are optional

	return options;
}

module.exports = {
	standardize: standardize_options
};
