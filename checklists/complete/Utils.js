const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');

function create_source_text (n) {
	return Array(n)
		.fill(0)
		.map((e, i) => `"[${i + 1}]":BLANK`)
		.join(' ');
}

Section.create(
	{
		title: 'Utilities',
		levels: ['negative', 'neutral', 'positive']
	},

	Record.button({
		title: 'Source:',
		records: '"[Source]":\n'
	}),

	Record.button({
		title: `5 Sources`,
		records: `Sources: ` + create_source_text(5)
	}),

	Record.list(
		`More Sources`, {
			title: `10 Sources`,
			records: `Sources: ` + create_source_text(10)
		}, {
			title: `15 Sources`,
			records: `Sources: ` + create_source_text(15)
		}, {
			title: `20 Sources`,
			records: `Sources: ` + create_source_text(20)
		}, {
			title: `25 Sources`,
			records: `Sources: ` + create_source_text(25)
		}, {
			title: `30 Sources`,
			records: `Sources: ` + create_source_text(30)
		}, {
			title: `35 Sources`,
			records: `Sources: ` + create_source_text(35)
		}, {
			title: `40 Sources`,
			records: `Sources: ` + create_source_text(40)
		}, {
			title: `45 Sources`,
			records: `Sources: ` + create_source_text(45)
		}, {
			title: `50 Sources`,
			records: `Sources: ` + create_source_text(50)
		}
	),

	Record.button({
		title: '+[[wiki]]',
		records: `[color=black]+[/color][[BLANK]]`
	}),

	Record.button({
		title: '+ratings',
		records: `[color=black]+[/color]"rating:":/help/ratings`
	}),

	Record.button({
		title: `(Blacklist)`,
		records: `"(Blacklist)":/user/edit`
	}),

	Record.list(
		'General Phrases', {
			title: `Same as before`,
			records: `Same as before.`
		}, {
			title: `Same as last time`,
			records: `Same as last time.`
		}
	),

	Record.button({
		title: 'Suspension Warning',
		records: [
			`Next time is a suspension.`,
			`Next offense may result in a temporary ban.`,
			`If you continue this your account will be suspended.`,
			`Next offense will result in a ban.`,
			`Next time your account will be suspended.`
		]
	}),

	Record.button({
		title: 'Permaban Warning',
		records: [
			`Next time is permanent.`,
			`Next time you will be permanently banned.`,
			`Another infraction will result in a permanent ban.`,
			`The next instance will result in a permanant ban.`,
			`Next time will be permanent.`
		]
	}),

	Record.br(),

	Record.list(
		'Phrases for Blacklist', {
			title: `If you don't like something then blacklist it`,
			records: `If you don't like something then blacklist it. "(Blacklist)":/user/edit`
		}, {
			title: 'Consider using your blacklist rather than complaining',
			records: `Consider using your blacklist rather than complaining. "(Blacklist)":/user/edit`
		}, {
			title: `Please use your blacklist`,
			records: `Please use your blacklist. "(Blacklist)":/user/edit`
		}, {
			title: `Please don't complain on artwork, just blacklist and move on`,
			records: `Please don't complain on artwork, just blacklist and move on. "(Blacklist)":/user/edit`
		}, {
			title: `Use your blacklist`,
			records: `Use your blacklist. "(Blacklist)":/user/edit`
		}
	),

	Record.list(
		'Phrases for Creepy Comments', {
			title: `We don't need to know that, please keep it to yourself`,
			records: `We don't need to know that, please keep it to yourself.`
		}, {
			title: `Please don't make comments like this`,
			records: `Please don't make comments like this.`
		}, {
			title: `Please don't leave creepy comments`,
			records: `Please don't leave creepy comments.`
		}, {
			title: `Please keep it to yourself`,
			records: `Please keep it to yourself.`
		}, {
			title: `Please don't be creepy`,
			records: `Please don't be creepy.`
		}, {
			title: `We don't need to know that, keep it to yourself`,
			records: `We don't need to know that, keep it to yourself.`
		}, {
			title: `Don't make comments like this`,
			records: `Don't make comments like this.`
		}, {
			title: `Keep it to yourself`,
			records: `Keep it to yourself.`
		}, {
			title: `Don't be creepy`,
			records: `Don't be creepy.`
		}, {
			title: `Stop being creepy`,
			records: `Stop being creepy.`
		}
	),

	Record.br(),

	Record.list(
		'Phrases for Harassing or Defamatory', {
			title: `Please be nice to your fellow users`,
			records: `Please be nice to your fellow users.`
		}, {
			title: `Be nice to your fellow users`,
			records: `Be nice to your fellow users.`
		}, {
			title: `Please don't insult people.`,
			records: `Please don't insult people.`
		}, {
			title: `Don't insult people`,
			records: `Don't insult people.`
		}, {
			title: `Please be nice`,
			records: `Please be nice.`
		}, {
			title: `Be nice`,
			records: `Be nice.`
		}
	),

	Record.list(
		'Phrases for Role-Playing', {
			title: `Please don't role-play in the comments`,
			records: `Please don't role-play in the comments.`
		}, {
			title: `Please don't talk to the characters`,
			records: `Please don't talk to the characters.`
		}, {
			title: `Stop role-playing, we don't want it here`,
			records: `Stop role-playing, we don't want it here.`
		}, {
			title: `Comments that seem to be roleplaying are also not allowed`,
			records: `Comments that seem to be roleplaying are also not allowed.`
		}
	),

	Record.list(
		'Phrases for Trolling', {
			title: `Don't be a troll`,
			records: `Don't be a troll.`
		}, {
			title: `Please don't be abrasive to other users`,
			records: `Please don't be abrasive to other users.`
		}, {
			title: `Please don't ask for art in the comments`,
			records: `Please don't ask for art in the comments.`
		}, {
			title: `BLANK`,
			records: `BLANK.`
		}
	)
);
