const Section = require('./../../source/section.js');
const Tag = require('./../../source/nodes/nodes.js');
const SetOperations = require('./../../source/set_operations.js');

Section.create(
	'Artist',
	Tag.custom('Artist'),
	Tag.label5('The artist of the image')
);

Section.create(
	'Copyright',
	Tag.custom('Copyright'),
	Tag.label5('The original series or company a character or game is owned by')
);

Section.create(
	'Character',
	Tag.custom('Character Name'),
	Tag.label5('Tag the character\'s best known name. If not that, their full name')
);

Section.create(
	'Body Type',
	...[
		'anthro',
		'semi_anthro',
		'feral',
		'humanoid',
		'taur',
		'anthrofied',
		'ponified',
		'feralized'].map(Tag.button)
);

Section.create(
	'Species',
	...[
		'human',
		'canine',
		'feline',
		'bovine',
		'cervine',
		'equine',
		'lagomorph',
		'rodent',
		'avian',
		'insect',
		'marine',
		'cetacean',
		'shark',
		'scalie'].map(Tag.button),
	Tag.label5('or do it yourself because you know it'),
	Tag.custom('Species')
);

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
		'maleherm',
		// adding these terms for those that forget
		// what e621 has switched to.
		'cuntboy',
		'dickgirl'].map(Tag.button),
	Tag.label5(Tag.url(
		'For the love of god, TWYS not TWYK',
		'https://e621.net/wiki/show/howto:tag_genders'
	))
);

// This creates something very not
// pretty, and will be fixed in the
// next version. For now the feature
// is just dissabled. Hope for it soon
Section.create(
	'Sex Pairings',
	...SetOperations.self_half_cross([
		'ambiguous_gender',
		'male',
		'female',
		'intersex',
		'gynomorph',
		'andromorph',
		'herm',
		'maleherm',
		'cuntboy',
		'dickgirl'])
		.map(e => Tag.button({
			tags: [e.join('/')],
			requires: e.join(' ')
		}))
);

Section.create(
	'How many',
	...[
		'none_pictured',
		'solo',
		'duo',
		'group'].map(Tag.button)
);

Section.create(
	'Focus',
	...[
		'solo_focus',
		'duo_focus'].map(Tag.button),
	Tag.label5('Solo focus can not have Solo. Duo focus can not have Duo')
);

Section.create(
	'Clothing',
	...[
		'fully_clothed',
		'partially_clothed',
		'skimpy',
		'nude',
		'bottomless',
		'topless',
		'underwear',
		'open_shirt'].map(Tag.button)
);

Section.create(
	'Location',
	...[
		'inside',
		'outside',
		'bedroom',
		'kitchen',
		'forest',
		'beach'].map(Tag.button)
);

Section.create(
	'Male Genitalia',
	...[
		'penis',
		'balls',
		'sheath',
		'knot',
		'erection',
		'half-erect',
		'flaccid',
		'humanoid_penis',
		'equine_penis',
		'canine_penis',
		'tapering_penis',
		'veiny_penis',
		'uncut',
		'circumcised'].map(Tag.button)
);

Section.create(
	'Female Genitalia',
	...[
		'pussy',
		'clitoris',
		'plump_labia',
		'humanoid_pussy',
		'equine_pussy',
		'canine_pussy'].map(Tag.button)
);

Section.create(
	'Common Genitalia',
	...[
		'butt',
		'anus',
		'puffy_anus',
		'gaping_anus',
		'urethra',
		'genital_slit'].map(Tag.button)
);

Section.create(
	'Sex Act',
	Tag.button('sex'),
	Tag.label5(''),
	Tag.custom('male/female'),
	Tag.label5(''),
	...[
		'masturbation',
		'handjob',
		'footjob',
		'fellatio',
		'cunnilingus',
		'vaginal_penetration',
		'anal_penetration',
		'threesome',
		'foursome',
		'orgy',
		'gangbang',
		'frottage',
		'tribadism',
		'orgasm',
		'cum_inside'].map(Tag.button)
);

Section.create(
	'Position',
	...[
		'missionary_position',
		'cowgirl_position',
		'reverse_cowgirl_position',
		'from_behind',
		'69_position',
		'stand_and_carry_position'].map(Tag.button),
	Tag.label5(Tag.url(
		'For more positions',
		'https://e621.net/wiki/show/tag_group:sex_positions'
	)),
	Tag.custom('custom_position')
);

Section.create(
	'Limbs',
	...[
		'crossed_arms',
		'raised_arms',
		'arms_behind_head',
		'spread_legs',
		'crossed_legs',
		'raised_leg',
		'legs_up',
		'raised_tail',
		'tailwag'].map(Tag.button)
);

Section.create(
	'Gaze',
	...[
		'looking_at_viewer',
		'looking_back',
		'eye_contact',
		'eyes_closed'].map(Tag.button)
);

Section.create(
	'Expression',
	...[
		'blush',
		'wink',
		'smile',
		'grin',
		'tongue_out',
		'naughty_face',
		'embarrassed',
		'happy',
		'sad',
		'bedroom_eyes'].map(Tag.button)
);

Section.create(
	'Medium',
	...[
		'sketch',
		'line_art',
		'monochrome',
		'shaded',
		'pencil_(artwork)',
		'watercolor',
		'3D',
		'digital_media_(artwork)'].map(Tag.button)
);

Section.create(
	'Organization',
	...[
		'comic',
		'multiple_scenes',
		'sequence',
		'close-up',
		'portrait',
		'pinup',
		'wallpaper'].map(Tag.button)
);

Section.create(
	'Style',
	...[
		'toony',
		'detailed',
		'realistic'].map(Tag.button)
);

Section.create(
	'Text and Language',
	...[
		'english_text',
		'japanese_text',
		'spanish_text',
		'runes',
		'dialogue',
		'speech_bubble',
		'symbol'].map(Tag.button)
);

Section.create(
	'Requests',
	...[
		'translation_request',
		'source_request',
		'tagme'].map(Tag.button)
);

Section.create(
	'Year of Creation',
	...[
		'2019',
		'2018',
		'2017',
		'2016'].map(Tag.button),
	Tag.custom('millennia old')
);
