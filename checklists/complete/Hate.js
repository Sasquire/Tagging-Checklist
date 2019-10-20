const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const create_section = require('./../../source/create_section.js');

const sexual_orientation_section = create_section(
	'Sexual Orientation',
	'/wiki/show?title=e621:rules#sexualorientation', {
		insult: 'Insultingly refer to any aspect of sexual orientation pertaining to themselves or other members'
	}
);

const RP_section = create_section(
	'Major Religions, Religious Figures, Political Parties, or Political Figures',
	'/wiki/show?title=e621:rules#religioushatred', {
		religion: 'Any discussion in forum posts, threads, or comments regarding major religions or religious figures',
		politics: 'Any discussion in forum posts, threads, or comments regarding major political parties or political figures'
	}
);

const ethnic_section = create_section(
	'National, Racial, or Ethnic Hatred',
	'/wiki/show?title=e621:rules#hatred', {
		promote: 'Promoting national, racial, or ethnic hatred',
		slur: 'Creating posts, threads, or comments with recognized national, racial, or ethnic slurs',
		hate: 'Creating posts, threads, or comments with hateful content',
		symbol: 'Alluding to symbols of national, racial, or ethnic hatred'
	}
);

const real_life_threats_section = create_section(
	'Real-Life Threats',
	'/wiki/show?title=e621:rules#rlthreats', {
		violence: 'Language that refers to violence in any capacity against a person or persons'
	}
);

const harassing_section = create_section(
	'Harassing or Defamatory',
	'/wiki/show?title=e621:rules#harassing', {
		insult: 'Insultingly refer to any individuals, including users, site staff, or Bad Dragon employees',
		action: 'Performing actions which result in ongoing harassment to any individuals, including users, site staff, or Bad Dragon employees',
		ticket: 'Using a User-requested ticket to publicly mock them'
	}
);

const doxxing_section = create_section(
	'Distribution of Real-Life Personal Information',
	'/wiki/show?title=e621:rules#distributionofrlinfo', {
		doxx: 'Releasing or assisting in releasing any real-life information about other members or employees of Bad Dragon, Dragonfruit, or e621, or anyone else'
	}
);

Section.create(
	{ title: 'Threats and Insults', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'Sexual Orientation',
		records: sexual_orientation_section('insult')
	}),

	Record.br(),

	Record.button({
		title: 'Religion / Politics',
		records: RP_section('religion', 'politics')
	}),

	Record.button({
		title: 'National, Racial, or Ethnic Hatred',
		records: ethnic_section('promote', 'slur', 'hate', 'symbol')
	}),

	Record.br(),

	Record.button({
		title: 'Real-Life Threats',
		records: real_life_threats_section('violence')
	}),

	Record.button({
		title: 'Harassing or Defamatory',
		records: harassing_section('insult', 'action', 'ticket')
	}),

	Record.button({
		title: 'Doxxing',
		records: doxxing_section('doxx')
	})
);
