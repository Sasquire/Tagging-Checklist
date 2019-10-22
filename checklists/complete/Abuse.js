const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const { r } = require('./../../source/utils.js');
const create_section = require('./../../source/create_section.js');

const tag_abuse_section = create_section(
	'Tagging Abuse / Tagging Vandalism',
	'/wiki/show?title=e621:rules#taggingabuse', {
		minimum: 'Failure to cite a minimum of 4 tags to an uploaded post',
		unnecessary: 'Adding a tag to a post that is not either clearly visible, or reasonably assumed',
		nuking: 'Removing a valid tag, either as part of a dispute/argument, or to place one that is not correct',
		rating: 'Failure to properly set the rating of your upload ("Help Ratings":/help/ratings)',
		badsource: 'Knowingly adding or editing a post source to an incorrect link',
		invalidtag: 'Adding invalid/disruptive tags, or any tags that could be considered as defamatory or spam',
		unicode: 'Using Unicode in tags, with the exception of foreign artist/character names'
	}
);

const post_abuse_section = create_section(
	'Posting Abuse',
	'/wiki/show?title=e621:rules#postingabuse', {
		dnp: 'Posting works made by one of the artists or publishers on the Avoid Posting List',
		pay: 'Posting any commercial or pay-to-view content',
		real: 'Posting real pornography / real images or videos depicting illegal activities (such as bestiality, child pornography, etc.)',
		deleted: 'Knowingly uploading previously deleted content',
		signature: 'Removing any watermark(s) or signature(s) from submissions',
		lowres: 'Knowingly or repeatedly uploading a lower-resolution image, if there is a higher-resolution of that image available',
		badimg: 'Knowingly or repeatedly uploading screenshots, images under 200x200 pixels, images with artifacts or large watermarks, and/or non-artistic images (motivational posters, Second Life, memes, image macros, etc.)',
		falseinfo: 'Editing/creating post descriptions (if you are not the artist, uploader, character owner, or commissioner) to create information',
		soapbox: 'Using post descriptions to express personal feelings, create drama, or otherwise take away from describing the attached post',
		spelling: 'Please try to use proper spelling and grammar in post descriptions'
	}
);

const site_abuse_section = create_section(
	'Abuse of Site Tools',
	'/wiki/show?title=e621:rules#abuseofsitetools', {
		spam: 'Using any of the site tools, such as Flag for Deletion, ticket reporting system, takedowns, notes, or any other site tool in a fashion that can be construed as disruptive, spamming, or defamatory',
		gibberish: 'Putting gibberish in any of the description fields',
		reportspam: 'Repeatedly submitting invalid, incorrect, or unnecessary requests',
		manyname: 'Repeatedly submitting username change requests',
		backseat: 'Using any of the site tools to “backseat moderate”',
		oldreport: 'Reporting forum posts, threads, comments, blips, or any other site media that is older than 6 months',
		mutlivote: 'Voting with multiple accounts on the same posts or comments'
	}
);

const hacks_section = create_section(
	'Posting Hacks, Trojan Horses, Maleware, or Malicious Programs',
	'/wiki/show?title=e621:rules#postinghacks', {
		showing: 'Showing unreleased content from anyone that has been discovered through unauthorized means',
		succhack: 'Showing the results of successful or attempted hacks of the Bad Dragon, Dragonfruit, or e621 servers, websites, or affiliates',
		paid_content: 'Showing paid content, or creating forum posts or comments that link to content only available through paid subscription services',
		nonpublic: 'Discuss, or display any data not available via public websites',
		about: 'Quoting, or otherwise referencing, another user who posts illegal/paid content or data'
	}
);

Section.create(
	{ title: 'Tool Abuse', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'Tag Nuking',
		records: r(
			`"Don't mass remove tags from posts.": Even if the post is going to be deleted or has been flagged, we need to keep the tag for various reasons, for example:`,
			``,
			`* People's blacklist will not work and will see it [b]even if it is flagged[/b].`,
			`* We need to be able to go back and easily check if something has been deleted before.`,
			``,
			tag_abuse_section('nuking')
		)
	}),

	Record.button({
		title: 'Four Tag Minimum',
		records: r(
			`A minimum of four tags are required upon upload. Ratings and tagme don't count. If you need help with tagging please look over our "tagging checklist":/wiki/show?title=e621%3Atagging_checklist. Please be sure all tags you add are valid to the post, use our "wiki":https://e621.net/wiki/show/e621:tags if you need help.`,
			``,
			tag_abuse_section('minimum', 'rating')
		)
	}),

	Record.button({
		title: 'Invalid/Inapplicable Tags',
		records: r(
			`"Tags or ratings marked with black + signs": were invalid or inapplicable and needed to be removed or changed. Use the [[Wiki]] if you need help.`,
			``,
			tag_abuse_section('unnecessary', 'badsource', 'invalidtag', 'unicode')
		)
	}),

	Record.button({
		title: 'Tagging Abuse / Tagging Vandalism',
		records: tag_abuse_section(
			'minimum',
			'unnecessary',
			'nuking',
			'rating',
			'badsource',
			'invalidtag',
			'unicode'
		)
	}),

	Record.br(),

	Record.button({
		title: 'DNP Record',
		records: r(
			`XXXXXX is DNP, please see our [[avoid posting]] list before uploading again`,
			``,
			post_abuse_section('dnp', 'pay')
		)
	}),

	Record.button({
		title: 'Paysite Record',
		records: r(
			`Paysite/commercial content is DNP, please see our [[avoid posting]] list before uploading again.`,
			``,
			post_abuse_section('dnp', 'pay')
		)
	}),

	Record.button({
		title: 'Posting Abuse',
		records: post_abuse_section(
			'dnp',
			'pay',
			'real',
			'deleted',
			'signature',
			'lowres',
			'badimg',
			'falseinfo',
			'soapbox',
			'spelling'
		)
	}),

	Record.br(),

	Record.button({
		title: 'Pool Vandalism',
		records: r(
			`"Don't remove posts from their rightful pools.":`,
			``,
			site_abuse_section('spam')
		)
	}),

	Record.button({
		title: 'Abuse of Site Tools',
		records: site_abuse_section(
			'spam',
			'gibberish',
			'reportspam',
			'manyname',
			'backseat',
			'oldreport',
			'mutlivote'
		)
	}),

	Record.br(),

	Record.button({
		title: 'Using hacks',
		records: hacks_section(
			'showing',
			'succhack',
			'paid_content',
			'nonpublic',
			'about'
		)
	})
);
