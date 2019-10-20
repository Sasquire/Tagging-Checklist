// ==UserScript==
// @name         e621 Complete Record buttons
// @description  Will add clickable buttons on the user record page to make issuing records quicker
// @version      1.002.001
// @author       idem

// @license      Unlicense (2019)

// @namespace    https://github.com/Sasquire/
// @supportURL   https://e621.net/user/show/170289

// @match        *://e621.net/user_record/create?user_id=*
// @match        *://e621.net/user_record/edit*
// @match        *://e621.net/user/block/*

// @match        *://e926.net/user_record/create?user_id=*
// @match        *://e926.net/user_record/edit*
// @match        *://e926.net/user/block/*
// ==/UserScript==

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
			`"Don't mass remove tags from posts.":__SOURCE_URL__ Even if the post is going to be deleted or has been flagged, we need to keep the tag for various reasons, for example:`,
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

},{"./../../source/create_section.js":12,"./../../source/nodes/nodes.js":18,"./../../source/section.js":20,"./../../source/utils.js":23}],2:[function(require,module,exports){
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

},{"./../../source/create_section.js":12,"./../../source/nodes/nodes.js":18,"./../../source/section.js":20}],3:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const { is_edit } = require('./../../source/site.js');

// Edits should only appear on the record edit page
if (is_edit) {
	Section.create(
		{
			title: 'Decayed',
			levels: ['negative']
		},

		Record.button({
			title: 'Decay from suspension',
			records: '[b][Decayed from Suspension to Negative.][/b]'
		})
	);

	Section.create(
		{
			title: 'Decayed',
			levels: ['neutral']
		},

		Record.button({
			title: 'Decay from negative',
			records: '[b][Decayed from Negative to Neutral.][/b]'
		})
	);
}

},{"./../../source/nodes/nodes.js":18,"./../../source/section.js":20,"./../../source/site.js":21}],4:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const create_section = require('./../../source/create_section.js');

const sexual_orientation_section = create_section(
	'Sexual Orientation',
	'/wiki/show?title=e621:rules#sexualorientation', {
		insult: 'Insultingly refer to any aspect of sexual orientation pertaining to themselves or other members'
	}
);

const RP_section = create_section(
	'Major Religions, Religious Figures, Political Parties, or Political Figures',
	'/wiki/show?title=e621:rules#religioushatred', {
		religion: 'Any discussion in forum posts, threads, or comments regarding major religions or religious figures',
		politics: 'Any discussion in forum posts, threads, or comments regarding major political parties or political figures'
	}
);

const ethnic_section = create_section(
	'National, Racial, or Ethnic Hatred',
	'/wiki/show?title=e621:rules#hatred', {
		promote: 'Promoting national, racial, or ethnic hatred',
		slur: 'Creating posts, threads, or comments with recognized national, racial, or ethnic slurs',
		hate: 'Creating posts, threads, or comments with hateful content',
		symbol: 'Alluding to symbols of national, racial, or ethnic hatred'
	}
);

const real_life_threats_section = create_section(
	'Real-Life Threats',
	'/wiki/show?title=e621:rules#rlthreats', {
		violence: 'Language that refers to violence in any capacity against a person or persons'
	}
);

const harassing_section = create_section(
	'Harassing or Defamatory',
	'/wiki/show?title=e621:rules#harassing', {
		insult: 'Insultingly refer to any individuals, including users, site staff, or Bad Dragon employees',
		action: 'Performing actions which result in ongoing harassment to any individuals, including users, site staff, or Bad Dragon employees',
		ticket: 'Using a User-requested ticket to publicly mock them'
	}
);

const doxxing_section = create_section(
	'Distribution of Real-Life Personal Information',
	'/wiki/show?title=e621:rules#distributionofrlinfo', {
		doxx: 'Releasing or assisting in releasing any real-life information about other members or employees of Bad Dragon, Dragonfruit, or e621, or anyone else'
	}
);

Section.create(
	{ title: 'Threats and Insults', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'Sexual Orientation',
		records: sexual_orientation_section('insult')
	}),

	Record.br(),

	Record.button({
		title: 'Religion / Politics',
		records: RP_section('religion', 'politics')
	}),

	Record.button({
		title: 'National, Racial, or Ethnic Hatred',
		records: ethnic_section('promote', 'slur', 'hate', 'symbol')
	}),

	Record.br(),

	Record.button({
		title: 'Real-Life Threats',
		records: real_life_threats_section('violence')
	}),

	Record.button({
		title: 'Harassing or Defamatory',
		records: harassing_section('insult', 'action', 'ticket')
	}),

	Record.button({
		title: 'Doxxing',
		records: doxxing_section('doxx')
	})
);

},{"./../../source/create_section.js":12,"./../../source/nodes/nodes.js":18,"./../../source/section.js":20}],5:[function(require,module,exports){
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

},{"./../../source/create_section.js":12,"./../../source/nodes/nodes.js":18,"./../../source/section.js":20,"./../../source/utils.js":23}],6:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const create_section = require('./../../source/create_section.js');

const blacklist_section = create_section(
	'(Refusal to Use) Blacklist',
	'/wiki/show?title=e621:rules#blacklist', {
		complaining: 'Creating posts, threads, or comments that complain about artwork that can be blacklisted',
		ignorance: 'Wrongfully claiming lack of knowledge about the blacklist system to avoid punishment from the previous rule'
	}
);

const evasion_section = create_section(
	'Circumventing a Suspension / Ban',
	'/wiki/show?title=e621:rules#banevading', {
		multi: 'Posting anything on another account',
		others: 'Having someone post on your behalf'
	}
);

const disregard_section = create_section(
	'Disregard of the Site Administration',
	'/wiki/show?title=e621:rules#disregardofadmin', {
		failure: 'Failure to abide by direct instructions by an administrator, moderator, and/or employee of Bad Dragon or Dragonfruit'
	}
);

const backseat_section = create_section(
	'Backseat Moderating',
	'/wiki/show?title=e621:rules#backseatmod', {
		implied: 'Implying moderator/administrator privileges where none exist',
		threaten: 'Non-administrator/moderator/staff threatening to use disciplinary actions against another user',
		order: 'Demanding, ordering, or otherwise stating to an administrator/moderator/staff certain administrative actions to be taken against another user'
	}
);

const impersonate_section = create_section(
	'Impersonating an Employee or Moderator',
	'/wiki/show?title=e621:rules#impersonatinganemployee', {
		employee: 'Passing yourself off as a current or past employee of Bad Dragon, Dragonfruit, or e621, especially to post false information',
		moderator: 'Passing yourself off as a current or past moderator of Bad Dragon, Dragonfruit, or e621, especially to post false information',
		other: 'Passing yourself off as another user to harass or besmirch them or their reputation'

	}
);

const plagiarism_section = create_section(
	'Plagiarism',
	'/wiki/show?title=e621:rules#plagiarism', {
		owner: 'Wrongfully claiming ownership of artwork',
		trace: 'Tracing artwork without the consent of the original owner or artist',
		edit: 'Repeatedly creating unauthorized edits after the original artist asked to stop'
	}
);

Section.create(
	{ title: 'Stubbornness', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'Blacklist',
		records: blacklist_section('complaining', 'ignorance')
	}),

	Record.button({
		title: 'Ban Evasion',
		records: evasion_section('multi', 'others')
	}),

	Record.button({
		title: 'Disregard',
		records: disregard_section('fail')
	}),

	Record.button({
		title: 'Backseat Mod',
		records: backseat_section('implied', 'threaten', 'order')
	}),

	Record.button({
		title: 'Staff Impersonation',
		records: impersonate_section('employee', 'moderator', 'other')
	}),

	Record.button({
		title: 'Plagiarism',
		records: plagiarism_section('owner', 'trace', 'edit')
	})
);

},{"./../../source/create_section.js":12,"./../../source/nodes/nodes.js":18,"./../../source/section.js":20}],7:[function(require,module,exports){
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

},{"./../../source/nodes/nodes.js":18,"./../../source/section.js":20}],8:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const { r } = require('./../../source/utils.js');
const create_section = require('./../../source/create_section.js');

const underage_section = create_section(
	'Age Restrictions',
	'/wiki/show?title=e621:rules#underage', {
		somehow: 'Any persons under the age of 18, or as determined by local laws',
		comment: 'Any comment or evidence of being under the age of 18'
	}
);

Section.create(
	{ title: 'Underage', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'No link',
		records: r(
			`You need to be 18 to access this page.`,
			``,
			`This ban won't expire, but if you have reached the sufficient age you can request your ban to be lifted by writing an email to management@e621.net.`,
			``,
			underage_section('somehow', 'comment')
		)
	}),

	Record.button({
		title: 'Link',
		records: r(
			`"You need to be 18 to access this page.":`,
			``,
			`This ban won't expire, but if you have reached the sufficient age you can request your ban to be lifted by writing an email to management@e621.net.`,
			``,
			underage_section('somehow', 'comment')
		)
	})
);

},{"./../../source/create_section.js":12,"./../../source/nodes/nodes.js":18,"./../../source/section.js":20,"./../../source/utils.js":23}],9:[function(require,module,exports){
require('./../../source/init.js').everything();

require('./Utils.js');
require('./Decayed.js');
require('./Creepy.js');
require('./Abuse.js');
require('./Spam.js');
require('./Stubborn.js');
require('./Hate.js');
require('./Younglings.js');

// Run the initial hiding
require('./../../source/hide_nodes.js')();

},{"./../../source/hide_nodes.js":13,"./../../source/init.js":14,"./Abuse.js":1,"./Creepy.js":2,"./Decayed.js":3,"./Hate.js":4,"./Spam.js":5,"./Stubborn.js":6,"./Utils.js":7,"./Younglings.js":8}],10:[function(require,module,exports){
function add_style (css) {
	const node = document.createElement('style');
	node.type = 'text/css';
	node.textContent = css;

	const head = document.head;
	const body = document.body;
	head ? head.appendChild(node) : body.appendChild(node);
}

module.exports = {
	add_style: add_style
};

},{}],11:[function(require,module,exports){
const { is_ban } = require('./site.js');

module.exports = (text) => {
	if (is_ban) {
		document.getElementById('ban_reason').value += text + ' ';
	} else {
		document.getElementById('user_record_body').value += text + ' ';
	}
};

},{"./site.js":21}],12:[function(require,module,exports){
function create_section (title, link, default_reasons, ...reasons) {
	reasons = reasons
		.map(e => `* ${default_reasons[e]}`)
		.join('\n');

	return `
[section=${title}]
[b]This category includes:[/b]

${reasons}

"[Code of Conduct - ${title}]":${link}
[/section]`;
}

function init (title, link, default_reasons) {
	function create_specific (...reasons) {
		return create_section(title, link, default_reasons, ...reasons);
	}

	return create_specific;
}

module.exports = init;

},{}],13:[function(require,module,exports){
const { is_ban } = require('./site.js');

function apply_level (level) {
	const sections = document.querySelectorAll('#record_table_body > tr');

	Array.from(sections).forEach(e => e.classList.remove('hidden'));

	Array.from(sections)
		// Sections that do not include the selected string
		.filter(e => !JSON.parse(e.dataset.levels).includes(level))
		.forEach(e => e.classList.add('hidden'));
}

function find_level () {
	const select = document.getElementById('user_record_score');
	const level = parseInt(select.options[select.selectedIndex].value, 10);
	// 1 is positive, 0 is neutral, -1 is negative
	return ['negative', 'neutral', 'positive'][level + 1];
}

function filter () {
	if (is_ban) {
		apply_level('negative');
	} else {
		const level = find_level();
		apply_level(level);
	}
};

module.exports = filter;

},{"./site.js":21}],14:[function(require,module,exports){
const css_string = require('./style.css');
const { add_style } = require('./../dependencies/add_style.js');
const filter_sections = require('./hide_nodes.js');

function remove_toJSON () {
	delete Object.prototype.toJSON;
	delete Date.prototype.toJSON;
	delete String.prototype.toJSON;
	delete Array.prototype.toJSON;
	delete Number.prototype.toJSON;
}

function init_css () {
	add_style(css_string);
}

function init_html () {
	document.getElementById('content').innerHTML += `
	<table id="record_table">
		<thead>
			<tr>
				<td>Section Title</td>
				<td>Section Buttons</td>
			</tr>
		</thead>
		<tbody id="record_table_body"></tbody>
	</table>
	`;
}

function init_everything () {
	init_html();
	remove_toJSON();
	init_css();
	init_watcher();
}

function init_watcher () {
	const select = document.getElementById('user_record_score');
	if (select) {
		select.addEventListener('change', filter_sections);
	}
}

module.exports = {
	everything: init_everything
};

},{"./../dependencies/add_style.js":10,"./hide_nodes.js":13,"./style.css":22}],15:[function(require,module,exports){
function label_generic (...text) {
	const label = document.createElement('label');
	const nodes = text.map(e => {
		if (typeof e === 'object') {
			return e;
		} else {
			const span = document.createElement('span');
			span.textContent = e;
			return span;
		}
	});

	nodes.forEach(e => label.appendChild(e));

	return label;
}

function url_elem (text, link) {
	const node = document.createElement('a');
	node.href = link;
	node.textContent = text;
	return node;
}

function br_elem () {
	return document.createElement('br');
}

const labels = {};

// Create custom label functions so they can
// be filtered based on importance. 9 is the
// most important while 0 is the least important
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(e => {
	const name = `label${e}`;
	labels[name] = (...texts) => {
		const label = label_generic(...texts);
		label.classList.add(name);
		return label;
	};
});

module.exports = {
	url: url_elem,
	br: br_elem,
	...labels
};

},{}],16:[function(require,module,exports){
const add_record = require('./../add_record.js');
const { random_from_node } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_button (options) {
	const button = document.createElement('button');
	button.type = 'button';

	// Custom data values
	button.dataset.records = JSON.stringify(options.records);
	button.textContent = options.title;

	button.addEventListener('click', apply_record);

	return button;
}

function apply_record (event) {
	event.preventDefault();
	const button = event.target;

	const record = random_from_node(button);
	add_record(record);
}

function button (options) {
	options = standardize(options);
	return create_button(options);
}

module.exports = {
	button: button
};

},{"./../add_record.js":11,"./../utils.js":23,"./standardize_options.js":19}],17:[function(require,module,exports){
const add_record = require('./../add_record.js');
const { random_from_node } = require('./../utils.js');
const { standardize } = require('./standardize_options.js');

function create_dummy_option (title) {
	return {
		title: title,
		records: ['']
	};
}

function create_select (title, ...options) {
	const select = document.createElement('select');
	select.name = title;

	[create_dummy_option(title)]
		.concat(options)
		.map(create_option)
		.forEach(e => select.appendChild(e));

	select.addEventListener('change', apply_records);

	return select;
}

function create_option (options) {
	const node = document.createElement('option');

	node.dataset.records = JSON.stringify(options.records);
	node.textContent = options.title;

	return node;
}

function apply_records (event) {
	const select = event.target;
	const selected = select.options[select.selectedIndex];

	const record = random_from_node(selected);
	add_record(record);

	select.selectedIndex = 0; // Reset
}

function list (title, ...others) {
	others = others.map(standardize);

	return create_select(title, ...others);
}

module.exports = {
	list: list
};

},{"./../add_record.js":11,"./../utils.js":23,"./standardize_options.js":19}],18:[function(require,module,exports){
const elements = require('./elements.js');
const generic_buttons = require('./generic_buttons.js');
const lists = require('./lists.js');

module.exports = {
	...generic_buttons,
	...lists,
	...elements
};

},{"./elements.js":15,"./generic_buttons.js":16,"./lists.js":17}],19:[function(require,module,exports){
function standardize_options (options) {
	// options.title <String>
	// options.records <String[]>

	if (!options.title || !options.records) {
		throw new Error('title and records must both be defined');
	}

	if (typeof options.records === 'string') {
		options.records = [options.records];
	}

	return options;
}

module.exports = {
	standardize: standardize_options
};

},{}],20:[function(require,module,exports){
function standardize_header (options) {
	if (options.title === undefined) {
		throw new Error('A title of the section must be defined');
	}

	if (typeof options.levels === 'string') {
		options.levels = [options.levels];
	}

	return options;
}

function append_section (node) {
	document.getElementById('record_table_body').appendChild(node);
}

function make_raw (settings, ...nodes) {
	const section = document.createElement('tr');
	section.dataset.levels = JSON.stringify(settings.levels);

	// Create header on the left
	const header = document.createElement('td');
	header.textContent = settings.title;
	section.appendChild(header);

	// Create buttons on the right
	const buttons = document.createElement('td');
	nodes.forEach(e => buttons.appendChild(e));
	section.appendChild(buttons);

	return section;
};

function section (options, ...nodes) {
	options = standardize_header(options);
	append_section(make_raw(options, ...nodes));
}

module.exports = {
	create: section
};

},{}],21:[function(require,module,exports){
const site = (() => {
	const path = window.location.pathname;
	if (path.includes('/user/block')) {
		return 'ban';
	} else if (path.includes('/user_record/edit')) {
		return 'edit';
	} else {
		return 'create';
	}
})();

module.exports = {
	is_ban: site === 'ban',
	is_edit: site === 'edit',
	is_create: site === 'create'
};

},{}],22:[function(require,module,exports){
module.exports = "#record_table .hidden {\n\tdisplay: none;\n}\n\n#record_table button {\n\tmargin-right: 3px;\n\tborder-radius: 4px;\n\tborder: 1px solid black;\n\tpadding: 2px 6px;\n}\n\n#record_table input[type=text] {\n\tmargin: 0px;\n\tbox-shadow: none;\n\ttop: 0;\n\theight: 1em;\n\tborder-radius: 3px;\n\tborder: 1px solid black;\n\tpadding: 2px;\n}\n\n#record_table select {\n\tborder-radius: 3px;\n\tbox-shadow: none;\n\tmargin-top: 0;\n\ttop: 0;\n\tpadding: 0px;\n\tborder: 1px solid black;\n}\n\n#record_table td { padding-bottom: 1em; }\n\n/* Bold the title of sections */\n#record_table td:first-child { font-weight: 700; }\n";

},{}],23:[function(require,module,exports){
function random_from_array (array) {
	return array[Math.floor(Math.random() * array.length)];
}

function random_from_node (node) {
	return random_from_array(JSON.parse(node.dataset.records));
}

function readable_text (...args) {
	return args.join('\n');
}

module.exports = {
	random_from_node: random_from_node,
	r: readable_text
};

},{}]},{},[9]);
