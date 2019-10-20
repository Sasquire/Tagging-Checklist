const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const { r } = require('./../../source/utils.js');
const create_section = require('./../../source/create_section.js');
const spam_section = create_section(
	'Spamming or Trolling',
	'/wiki/show?title=e621:rules#spamming', {
		spam: 'Excessively communicating the same phrase, similar phrases, or pure gibberish',
		edgy: 'Creating comments, forum posts, or threads for the sole purpose of causing unrest',
		fights: 'Causing disturbances in forum threads or comments, such as picking fights, making off topic posts that ruin the thread, and/or insult other members',
		derail: 'Making non-constructive or derailing forum posts or comments.',
		dnpbragging: 'Bragging about saving DNP material, or encouraging others to save it',
		repotabuse: 'Abusing the Report system or other website tools by sending false information or nonsensical messages',
		forumdupe: 'Creating forum threads about existing topics less than six months old',
		forumwrong: 'Creating a separate forum thread about an existing topic for further discussion in another forum category',
		forumlock: 'Creating a separate forum thread about an existing locked topic for further discussion in any forum or site',
		necro: 'Excessively posting old threads without adding anything to the discussion',
		vapid: 'Excessively creating pointless threads like forum games, asking for opinions on site irrelevant themes, asking for free art, etc',
		fad: 'Numbering a thread, IBTL, ITT, TL;DR, or any other fad statements'
	}
);

const advertising_section = create_section(
	'Advertising',
	'/wiki/show?title=e621:rules#advertising', {
		what: 'Any non-beneficial, non-approved related businesses, organizations, or websites',
		spam: 'Can be linked with Spamming or Trolling if it is used multiple times in a short period of time'
	}
);

const virus_section = create_section(
	'Posting Hacks, Trojan Horses, or Malicious Programs',
	'/wiki/show?title=e621:rules#postinghacks', {
		post: 'Creating posts, threads, or comments that link to hacks or malicious programs/viruses'
	}
);

Section.create(
	{
		title: 'Spamming or Trolling',
		levels: ['negative', 'neutral']
	},

	Record.button({
		title: 'Blipping at Banned',
		records: r(
			`Please don't blip at banned users. They wont hear you and it tends to stir drama.`,
			spam_section('edgy', 'derail')
		)
	}),

	Record.button({
		title: 'Spamming',
		records: r(
			`While short 1-3 word comments are fine every now and then doing so consistently is considered spamming. "Please put more effort into your future comments.":https://e621.net/comment/search?user_id=`,
			spam_section('spam', 'derail')
		)
	}),

	Record.button({
		title: 'Spamming or Trolling',
		records: spam_section(
			'spam',
			'edgy',
			'fights',
			'derail',
			'dnpbragging',
			'repotabuse',
			'forumdupe',
			'forumwrong',
			'forumlock',
			'necro',
			'vapid',
			'fad'
		)
	}),

	Record.br(),

	Record.button({
		title: 'Advertising',
		records: advertising_section('what', 'spam')
	}),

	Record.br(),

	Record.button({
		title: 'Viruses',
		records: virus_section('post')
	})
);
