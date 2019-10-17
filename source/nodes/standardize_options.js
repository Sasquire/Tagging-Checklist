function standardize_options (options) {
	// options.title <String>
	// options.records <String[]>

	if (!options.title || !options.records) {
		throw new Error('title and records must both be defined');
	}

	if (typeof options.records === 'string') {
		options.records = [options.records];
	}

	return options;
}

module.exports = {
	standardize: standardize_options
};
