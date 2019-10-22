const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');

function create_source_text (n) {
	return Array(n)
		.fill(0)
		.map((e, i) => `"[${i + 1}]":`)
		.join(' ');
}

Section.create(
	{
		title: 'Utilities',
		levels: ['negative', 'neutral', 'positive']
	},

	Record.list(
		'Sources', {
			title: 'One',
			records: '"[Source]":'
		}, {
			title: 'Five',
			records: create_source_text(5)
		}, {
			title: 'Ten',
			records: create_source_text(10)
		}, {
			title: 'Fifteen',
			records: create_source_text(15)
		}, {
			title: 'Twenty',
			records: create_source_text(20)
		}, {
			title: 'Twenty Five',
			records: create_source_text(25)
		}, {
			title: 'Thirty',
			records: create_source_text(30)
		}
	),

	Record.button({
		title: '+[[wiki]]',
		records: '[color=black]+[/color][[]]'
	}),

	Record.br(),

	Record.list(
		'Blacklist Phrases', {
			title: 'Use it',
			records: '"(Blacklist)":/user/edit Use it.'
		}, {
			title: 'Link',
			records: 'Blacklist. "(Blacklist)":/user/edit'
		}, {
			title: 'Use your',
			records: 'Use your blacklist. "(Blacklist)":/user/edit'
		}, {
			title: 'Please',
			records: 'Please use your blacklist. "(Blacklist)":/user/edit'
		}, {
			title: 'Consider',
			records: 'Consider using your blacklist rather than complaining. "(Blacklist)":/user/edit'
		}
	),

	Record.list(
		'Creepy Phrases', {
			title: 'Please WDNTK',
			records: 'We don\'t need to know that, please keep it to yourself.'
		}, {
			title: 'WDNTK',
			records: 'We don\'t need to know that, keep it to yourself.'
		}, {
			title: 'Keep it',
			records: 'Keep it to yourself.'
		}, {
			title: 'Please don\'t',
			records: 'Please don\'t be creepy.'
		}, {
			title: 'Don\'t',
			records: 'Don\'t be creepy.'
		}, {
			title: 'Keep it',
			records: 'Keep it to yourself.'
		}, {
			title: 'Don\'t comment',
			records: 'Please don\'t make creepy comments.'
		}, {
			title: 'Stop',
			records: 'Stop being creepy.'
		}
	),

	Record.list(
		'Harass Phrases', {
			title: 'Be nice',
			records: 'Be nice.'
		}, {
			title: 'Please',
			records: 'Please be nice.'
		}, {
			title: 'To peers',
			records: 'Be nice to your fellow users.'
		}, {
			title: 'Please to peers',
			records: 'Please be nice to your fellow users.'
		}, {
			title: 'Don\'t insult',
			records: 'Don\'t insult people.'
		}, {
			title: 'Please Don\'t',
			records: 'Please don\'t insult people.'
		}
	),

	Record.list(
		'Trolling Phrases', {
			title: 'Don\'t',
			records: 'Don\'t be a troll.'
		}, {
			title: 'We\'re done',
			records: 'And we\'re done here.'
		}
	)
);
