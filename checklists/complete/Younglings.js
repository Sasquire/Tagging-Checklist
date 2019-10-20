const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const { r } = require('./../../source/utils.js');
const create_section = require('./../../source/create_section.js');

const underage_section = create_section(
	'Age Restrictions',
	'/wiki/show?title=e621:rules#underage', {
		somehow: 'Any persons under the age of 18, or as determined by local laws',
		comment: 'Any comment or evidence of being under the age of 18'
	}
);

Section.create(
	{ title: 'Underage', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'No link',
		records: r(
			`You need to be 18 to access this page.`,
			``,
			`This ban won't expire, but if you have reached the sufficient age you can request your ban to be lifted by writing an email to management@e621.net.`,
			``,
			underage_section('somehow', 'comment')
		)
	}),

	Record.button({
		title: 'Link',
		records: r(
			`"You need to be 18 to access this page.":`,
			``,
			`This ban won't expire, but if you have reached the sufficient age you can request your ban to be lifted by writing an email to management@e621.net.`,
			``,
			underage_section('somehow', 'comment')
		)
	})
);
