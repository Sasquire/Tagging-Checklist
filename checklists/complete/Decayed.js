const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const { is_edit } = require('./../../source/site.js');

// Edits should only appear on the record edit page
if (is_edit) {
	Section.create(
		{
			title: 'Decayed', levels: ['negative']
		},

		Record.button({
			title: 'Decay to Negative',
			records: '[b][Decayed from Suspension to Negative][/b]'
		})
	);

	Section.create(
		{
			title: 'Decayed', levels: ['neutral']
		},

		Record.button({
			title: 'Decay to Neutral',
			records: '[b][Decayed from Negative to Neutral][/b]'
		})
	);
}