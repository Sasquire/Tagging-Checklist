const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');

Section.create(
	{
		title: 'Sampletext',
		levels: ['neutral']
	},

	...[{
		title: 'Solicitation',
		records: '[[e621:rules#solicitation|Solicitation]]'
	}, {
		title: 'Spamming or Trolling',
		records: '[[e621:rules#spamming|Spamming or Trolling]]'
	}, {
		title: 'Tagging Abuse / Tagging Vandalism',
		records: '[[e621:rules#taggingabuse|Tagging Abuse / Tagging Vandalism]]'
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
