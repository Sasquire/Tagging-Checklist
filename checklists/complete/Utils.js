const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');

function create_source_text (n) {
	return Array(n)
		.fill(0)
		.map((e, i) => `"[${i + 1}]":__SOURCE_URL__`)
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
			records: '"[Source]":__SOURCE_URL__'
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

	Record.br(),

	Record.button({
		title: '+[[wiki]]',
		records: '[color=black]+[/color][[__WIKI_LINK__]]'
	})
);
