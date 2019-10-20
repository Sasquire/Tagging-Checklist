const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const create_section = require('./../../source/create_section.js');

const creepy_comments_section = create_section(
	'Creepy Comments',
	'/wiki/show?title=e621%3Arules#Creepy', {
		create: 'Creating forum posts, threads, or comments that cause an unpleasant feeling of fear or unease, or are sexually inappropriate'
	}
);

const solicitation_section = create_section(
	'Solicitation',
	'/wiki/show?title=e621:rules#solicitation', {
		create: 'Creating forum posts, threads, or comments that cause an unpleasant feeling of fear or unease, or are sexually inappropriate'
	}
);

const RP_section = create_section(
	'Role-Play',
	'/wiki/show?title=e621:rules#rp', {
		info: 'Soliciting personal or otherwise confidential information of another user or users',
		reallife: 'Requesting, demanding, or offering to trade real life photographs, videos, or any other form of media from another user or users',
		user: 'Requesting, demanding, or offering to trade information from another user or users'
	}
);

const bestiality_section = create_section(
	'Bestiality',
	'/wiki/show?title=e621:rules#bestiality', {
		create: 'Creating a post, forum post, or thread that is an inappropriate reference to real-life bestiality, sexual relations, or bodily functions',
		promote: 'Linking or commenting on a website that promotes material that contains inappropriate references to real-life bestiality, sexual relations, or bodily functions',
		video: 'Linking to explicit, real-life material involving animal genitalia or animals mating'
	}
);

const extreme_sex_section = create_section(
	'Extreme Sexuality / Violence',
	'/wiki/show?title=e621:rules#extremesexualityviolence', {
		sex: 'Linking to websites that refer to extreme real-life violent sexual activity',
		violence: 'Linking to websites that refer to extreme real-life violence',
		fetish: 'Linking to websites that refer to extreme kinks and/or fetishes'
	}
);

const drugs_section = create_section(
	'Illegal Activities or Drugs',
	'/wiki/show?title=e621:rules#illegalactivities', {
		drugs: 'Forum threads or comments that references to abusing illegal drugs',
		crimes: 'Forum threads or comments that references to performing illegal activities',
		admit: 'Admitting to partaking in arson, bestiality, kidnapping, manslaughter or other similar serious crimes will lead to the permanent closure of your account.',
		convict: 'Being a convicted felon for any of the above crimes may also lead to the permanent closure of your account.'
	}
);

Section.create(
	{ title: 'General Creepiness', levels: ['negative', 'neutral'] },

	Record.br(),

	Record.button({
		title: 'Creepy Comments',
		records: creepy_comments_section('create')
	}),

	Record.button({
		title: 'Solicitation',
		records: solicitation_section('info', 'reallife', 'user')
	}),

	Record.button({
		title: 'Role-Play',
		records: RP_section('at_all', 'impersonating', 'posts')
	}),

	Record.br(),

	Record.button({
		title: 'Bestiality',
		records: bestiality_section('create', 'promote', 'video')
	}),

	Record.button({
		title: 'Extreme Sexuality / Violence',
		records: extreme_sex_section('sex', 'violence', 'fetish')
	}),

	Record.button({
		title: 'Illegal Activities or Drugs',
		records: drugs_section('drugs', 'crimes', 'admit', 'convict')
	})
);
