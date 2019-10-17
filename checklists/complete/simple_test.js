const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');

// ['negative', 'neutral', 'positive']

Section.create(
	{
		title: 'Bad things',
		levels: ['negative']
	},

	...[{
		title: 'a',
		records: 'a'
	}, {
		title: 'b',
		records: 'b'
	}, {
		title: 'c',
		records: 'c'
	}, {
		title: 'fun',
		records: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9'
		]
	}].map(Tag.button)
);

Section.create(
	{
		title: 'Okay things',
		levels: ['neutral']
	},

	...[{
		title: 'd',
		records: 'd'
	}, {
		title: 'e',
		records: 'e'
	}, {
		title: 'f',
		records: 'f'
	}].map(Tag.button)
);

Section.create(
	{
		title: 'Both things',
		levels: ['negative', 'neutral']
	},

	...[{
		title: 'g',
		records: 'g'
	}, {
		title: 'h',
		records: 'h'
	}, {
		title: 'i',
		records: 'i'
	}].map(Tag.button)
);

Section.create(
	{
		title: 'Good things',
		levels: ['positive']
	},

	...[{
		title: 'j',
		records: 'j'
	}, {
		title: 'k',
		records: 'k'
	}, {
		title: 'l',
		records: 'l'
	}].map(Tag.button)
);
