const Init = require('./../../source/init.js');
const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');

Init.everything();
Init.sources('https://twitter.com/e621dotnet\nhttps://google.com\nLimit of 10. Use them!');
Init.description('If you can not think of a description, use the artists description!');

Section.create(
	'Artist',
	Tag.custom('Artist\'s name'),
	Tag.label5(
		'Tag the artist! If you\'re the artist, add your name!',
		Tag.br(),
		'Don\'t know who the artist is? Tag ',
		Tag.url('unknown_artist', 'https://e621.net/wiki/show/unknown_artist'),
		'!',
		Tag.br(),
		'Maybe they want to be an ',
		Tag.url('anonymous_artist', 'https://e621.net/wiki/show/anonymous_artist'),
		'?'
	)
);
