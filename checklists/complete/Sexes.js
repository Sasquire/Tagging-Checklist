const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');

Section.create(
	'Sexes',
	...[
		'ambiguous_gender',
		'male',
		'female',
		'intersex',
		'gynomorph',
		'andromorph',
		'herm',
		'maleherm'].map(Tag.button),

	// Adding these terms for those that forget
	// what e621 has switched to.
	Tag.alias('cuntboy', 'andromorph'),
	Tag.alias('dickgirl', 'gynomorph')
);
