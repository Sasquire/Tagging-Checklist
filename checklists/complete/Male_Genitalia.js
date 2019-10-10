const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');
const SetOperations = require('./../../source/set_operations.js');
const Constants = require('./../../source/constants.js');

Section.create(
	{
		title: 'Male Genitalia',
		requires: 'male; gynomorph; herm; maleherm'
	},
	...[
		'penis',
		'balls',
		'sheath'].map(Tag.button)
);

Section.create(
	{
		title: 'Multiple Penises on One Character',
		requires: 'penis'
	},
	Tag.button('multi_penis')
);

Section.create(
	{
		title: 'Penis Features',
		requires: 'penis'
	},

	Tag.list(
		'Penis Size',
		'micro_penis',
		'small_penis',
		{ title: 'normal_penis', tags: [] },
		'large_penis',
		'huge_penis',
		'hyper_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Thickness',
		'thin_penis',
		{ title: 'normal_penis', tags: [] },
		'thick_penis',
		'hyper_thick_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Length',
		'short_penis',
		{ title: 'normal_penis', tags: [] },
		'long_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Color',
		...SetOperations.cross(Constants.colors, ['_penis'])
			.map(e => e.join(''))
	),

	Tag.br(),

	Tag.list(
		'Penis Texture',
		'barbed_penis',
		'ridged_penis',
		'veiny_penis',
		'ribbed_penis',
		'nubbed_penis',
		'spiked_penis'
	),

	Tag.br(),

	Tag.list(
		'Penis Type',
		'humanoid_penis',
		'equine_penis',
		{ tags: ['knotted_equine_penis'], requires: 'knot' },
		{ tags: ['knotted_humanoid_penis'], requires: 'knot' },
		'canine_penis',
		'cetacean_penis',
		'feline_penis',
		'anatomically_correct_penis',
		'hybrid_penis',
		'unusual_penis'
	),

	Tag.br(),

	Tag.list(
		'Erection Status',
		'flaccid',
		'half-erect',
		'erection'
	)
);

Section.create(
	{
		title: 'Penis Head Features',
		requires: 'penis'
	},
	...[
		'flared_penis',
		'tapering_penis',

		'uncut',
		'circumcised'].map(Tag.button)

);
