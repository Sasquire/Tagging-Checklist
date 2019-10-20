const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const create_section = require('./../../source/create_section.js');

const blacklist_section = create_section(
	'(Refusal to Use) Blacklist',
	'/wiki/show?title=e621:rules#blacklist', {
		complaining: 'Creating posts, threads, or comments that complain about artwork that can be blacklisted',
		ignorance: 'Wrongfully claiming lack of knowledge about the blacklist system to avoid punishment from the previous rule'
	}
);

const evasion_section = create_section(
	'Circumventing a Suspension / Ban',
	'/wiki/show?title=e621:rules#banevading', {
		multi: 'Posting anything on another account',
		others: 'Having someone post on your behalf'
	}
);

const disregard_section = create_section(
	'Disregard of the Site Administration',
	'/wiki/show?title=e621:rules#disregardofadmin', {
		failure: 'Failure to abide by direct instructions by an administrator, moderator, and/or employee of Bad Dragon or Dragonfruit'
	}
);

const backseat_section = create_section(
	'Backseat Moderating',
	'/wiki/show?title=e621:rules#backseatmod', {
		implied: 'Implying moderator/administrator privileges where none exist',
		threaten: 'Non-administrator/moderator/staff threatening to use disciplinary actions against another user',
		order: 'Demanding, ordering, or otherwise stating to an administrator/moderator/staff certain administrative actions to be taken against another user'
	}
);

const impersonate_section = create_section(
	'Impersonating an Employee or Moderator',
	'/wiki/show?title=e621:rules#impersonatinganemployee', {
		employee: 'Passing yourself off as a current or past employee of Bad Dragon, Dragonfruit, or e621, especially to post false information',
		moderator: 'Passing yourself off as a current or past moderator of Bad Dragon, Dragonfruit, or e621, especially to post false information',
		other: 'Passing yourself off as another user to harass or besmirch them or their reputation'

	}
);

const plagiarism_section = create_section(
	'Plagiarism',
	'/wiki/show?title=e621:rules#plagiarism', {
		owner: 'Wrongfully claiming ownership of artwork',
		trace: 'Tracing artwork without the consent of the original owner or artist',
		edit: 'Repeatedly creating unauthorized edits after the original artist asked to stop'
	}
);

Section.create(
	{ title: 'Stubbornness', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'Blacklist',
		records: blacklist_section('complaining', 'ignorance')
	}),

	Record.button({
		title: 'Ban Evasion',
		records: evasion_section('multi', 'others')
	}),

	Record.button({
		title: 'Disregard',
		records: disregard_section('fail')
	}),

	Record.button({
		title: 'Backseat Mod',
		records: backseat_section('implied', 'threaten', 'order')
	}),

	Record.button({
		title: 'Staff Impersonation',
		records: impersonate_section('employee', 'moderator', 'other')
	}),

	Record.button({
		title: 'Plagiarism',
		records: plagiarism_section('owner', 'trace', 'edit')
	})
);
