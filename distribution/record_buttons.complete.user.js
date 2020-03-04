// ==UserScript==
// @name         e621 Complete Record buttons
// @description  Will add clickable buttons on the user record page to make issuing records quicker
// @version      1.002.002
// @author       Millcore, idem

// @license      Unlicense (2020)

// @namespace    https://github.com/Sasquire/
// @supportURL   https://e621.net/user/show/170289
// @downloadURL  https://raw.githubusercontent.com/Sasquire/Tagging-Checklist/record-buttons/distribution/record_buttons.complete.user.js

// @match        *://e621.net/user_feedbacks/new*
// @match        *://e621.net/user_feedbacks/*/edit
// @match        *://e621.net/bans/new*

// @match        *://e926.net/user_feedbacks/new*
// @match        *://e926.net/user_feedbacks/*/edit
// @match        *://e926.net/bans/new*
// ==/UserScript==

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');
const { is_edit } = require('./../../source/site.js');

// Edits should only appear on the record edit page
if (is_edit) {
	Section.create(
		{
			title: 'Decayed', levels: ['negative']
		},

		Record.button({
			title: 'Decay to Negative',
			records: '[b][Decayed from Suspension to Negative][/b]'
		})
	);

	Section.create(
		{
			title: 'Decayed', levels: ['neutral']
		},

		Record.button({
			title: 'Decay to Neutral',
			records: '[b][Decayed from Negative to Neutral][/b]'
		})
	);
}
},{"./../../source/nodes/nodes.js":16,"./../../source/section.js":18,"./../../source/site.js":19}],2:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');

Section.create(
	{ title: 'Pre-made Templates', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'Four Tag Minimum',
		records: `A minimum of four tags are required upon upload. Ratings and tagme don't count. If you need help with tagging please look over our "tagging checklist":/wiki/show?title=e621%3Atagging_checklist. Please be sure all tags you add are valid to the post, use our "Wiki":https://e621.net/wiki/show/e621:tags if you need help. "[Source]":
[section=Tagging Abuse / Tagging Vandalism][b]This category includes:[/b]

* Failure to cite a minimum of 4 tags to an uploaded post
* Failure to properly set the rating of your upload ("Help ratings":/help/ratings)

"[Code of Conduct - Tagging Abuse / Tagging Vandalism]":/wiki/show?title=e621:rules#taggingabuse [/section]
`
	}),

	Record.button({
		title: 'Invalid/Inapplicable Tags',
		records: `Tags and "ratings":/help/ratings marked with a black [color=black]+[/color] were invalid or inapplicable and have been removed or changed. "[Source]":
Please use the "Wiki":/wiki/show?title=help%3Ahome if you need help understanding the usage of any tags, or ask directly at our Helpdesk on our "Discord":/static/discord. You can also search our "Forum":/forum/index
Recommended reading (non-existing pages by defualt imply tag is invalid):

[section=Tagging Abuse / Tagging Vandalism][b]This category includes:[/b]

* Failure to cite a minimum of 4 tags to an uploaded post
* Adding a tag to a post that is not either clearly visible, or reasonably assumed
* Removing a valid tag, either as part of a dispute/argument, or to place one that is not correct
* Failure to properly set the rating of your upload ("Help Ratings":/help/ratings)
* Knowingly adding or editing a post source to an incorrect link
* Adding invalid/disruptive tags, or any tags that could be considered as defamatory or spam
* Using Unicode in tags, with the exception of foreign artist/character names

"[Code of Conduct - Tagging Abuse / Tagging Vandalism]":/wiki/show?title=e621:rules#taggingabuse [/section]
`
	}),

	Record.button({
		title: 'Pool Vandalism',
		records: `"Don't remove posts from their rightful pools.":
"[Code of Conduct - Abuse of Site Tools]":/wiki/show?title=e621:rules#abuseofsitetools`
	}),

	Record.button({
		title: `Spamming`,
		records: `While short 1-3 word comments are fine every now and then doing so consistently is considered spamming. "Please put more effort into your future comments.":

[section=Spamming][b]This category includes:[/b]

* Excessively communicating the same phrase, similar phrases, or pure gibberish
* Making non-constructive or derailing forum posts or comments.

"[Code of Conduct - Spamming or Trolling]":/wiki/show?title=e621:rules#spamming	[/section]
`
	}),

	Record.button({
		title: 'Tag Nuking',
		records: `Don't mass remove tags from posts. Even if the post is going to be deleted or has been flagged, we need to keep the tag for various reasons, for example:

* People's blacklist will not work and will see it even if it is flagged.
* We need to be able to easily check if something has been deleted before.

[section=Tagging Abuse / Tagging Vandalism][b]This category includes:[/b]

* Removing a valid tag, either as part of a dispute/argument, or to place one that is not correct

"[Code of Conduct - Tagging Abuse / Tagging Vandalism]":/wiki/show?title=e621:rules#taggingabuse [/section]
`
	}),

	Record.br(),

	Record.button({
		title: 'DNP Record',
		records: `XXXXXX is DNP.
Please check our [[avoid posting]] list before uploading again.
[section=Posting Abuse][b]This category includes:[/b]

* Posting content listed in the "Avoid Posting List":/wiki/show?title=avoid_posting
* Posting any commercial or pay-to-view content

"[Code of Conduct - Posting Abuse]":/wiki/show?title=e621:rules#postingabuse [/section]
`
	}),

	Record.button({
		title: 'CDNP Record',
		records: `XXXXXX is conditionally DNP - 
Please check our [[avoid posting]] list before uploading again.
[section=Posting Abuse][b]This category includes:[/b]

* Posting content listed in the "Avoid Posting List":/wiki/show?title=avoid_posting
* Posting any commercial or pay-to-view content

"[Code of Conduct - Posting Abuse]":/wiki/show?title=e621:rules#postingabuse [/section]
`
	}),

	Record.button({
		title: 'Paysite Record',
		records: `Paysite/commercial content is DNP.
If the art in quality and resolution isn't freely available from the artist or commission then do not post it here.
Please check our [[avoid posting]] list before uploading again.
[section=Posting Abuse][b]This category includes:[/b]

* Posting content listed in the "Avoid Posting List":/wiki/show?title=avoid_posting
* Posting any commercial or pay-to-view content

"[Code of Conduct - Posting Abuse]":/wiki/show?title=e621:rules#postingabuse [/section]
`
	}),

	// Pay content is DNP. I highly suggest not sourcing from known piracy sites like Paheal or u18chan.

);
},{"./../../source/nodes/nodes.js":16,"./../../source/section.js":18}],3:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');

Section.create(
	{ title: 'Typical', levels: ['negative', 'neutral'] },

	Record.button({
		title: 'Abuse of Site Tools',
		records: `[section=Abuse of Site Tools][b]This category includes:[/b]

* Using any of the site tools, such as Flag for Deletion, ticket reporting system, takedowns, notes, or any other site tool in a fashion that can be construed as disruptive, spamming, or defamatory
* Putting gibberish in any of the description fields
* Repeatedly submitting invalid, incorrect, or unnecessary requests
* Repeatedly submitting username change requests
* Using any of the site tools to "�backseat moderate�":/wiki/show/e621:rules#backseatmod
* Reporting forum posts, threads, comments, or any other site media that is older than 6 months
* Voting with multiple accounts on the same posts or comments

"[Code of Conduct - Abuse of Site Tools]":/wiki/show?title=e621:rules#abuseofsitetools [/section]
`
	}),

	Record.button({
		title: 'Blacklist',
		records: `[section=(Refusal to Use) Blacklist][b]This category includes:[/b]

* Creating posts, threads, or comments that complain about artwork that can be blacklisted
* Wrongfully claiming lack of knowledge about the blacklist system to avoid punishment from the previous rule

"[Code of Conduct - (Refusal to Use) Blacklist]":/wiki/show?title=e621:rules#blacklist [/section]
`
	}),

	Record.button({
		title: 'Creepy Comments',
		records: `[section=Creepy Comments][b]This category includes:[/b]

* Creating forum posts, threads, or comments that cause an unpleasant feeling of fear or unease, or are sexually inappropriate

"[Code of Conduct - Creepy Comments]":/wiki/show?title=e621%3Arules#Creepy [/section]
`
	}),

	Record.button({
		title: 'Harassing or Defamatory',
		records: `[section=Harassing or Defamatory][b]This category includes:[/b]

* Insultingly refer to any individuals, including users, site staff, or Bad Dragon employees
* Performing actions which result in ongoing harassment to any individuals, including users, site staff, or Bad Dragon employees
* Using a User-requested ticket to publicly mock them

"[Code of Conduct - Harassing or Defamatory]":/wiki/show?title=e621:rules#harassing [/section]
`
	}),

	Record.button({
		title: 'Posting Abuse',
		records: `[section=Posting Abuse][b]This category includes:[/b]

* Posting works made by one of the artists or publishers on the "Avoid Posting List":/wiki/show?title=avoid_posting
** Repeatedly posting works that 
* Posting any commercial or pay-to-view content
* Posting real pornography / real images or videos depicting illegal activities (such as bestiality, child pornography, etc.)
* Knowingly uploading previously deleted content
* Removing any watermark(s) or signature(s) from submissions
* Knowingly or repeatedly uploading a lower-resolution image, if there is a higher-resolution of that image available
* Knowingly or repeatedly uploading screenshots, images under 200x200 pixels, images with artifacts or large watermarks, and/or non-artistic images (motivational posters, Second Life, memes, image macros, etc.)
** See our "Uploading Guidelines":/wiki/show/uploading_guidelines#bad for a full list of things that are bad to upload
* Editing/creating post descriptions (if you are not the artist, uploader, character owner, or commissioner) to create information
* Using post descriptions to express personal feelings, create drama, or otherwise take away from describing the attached post
* Please try to use proper spelling and grammar in post descriptions

"[Code of Conduct - Posting Abuse]":/wiki/show?title=e621:rules#postingabuse [/section]
`
	}),

	Record.button({
		title: 'Role-Play',
		records: `[section=Role-Play][b]This category includes:[/b]

* Initiating or partaking in explicit role-play of any type
* Impersonating fictional/nonfictional characters or people
* Initiating or partaking in role-play with characters in the related thread/post

"[Code of Conduct - Role-Play]":/wiki/show?title=e621:rules#rp [/section]
`
	}),

	Record.button({
		title: 'Spamming or Trolling',
		records: `[section=Spamming or Trolling][b]This category includes:[/b]

* Excessively communicating the same phrase, similar phrases, or pure gibberish
* Creating comments, forum posts, or threads for the sole purpose of causing unrest
* Causing disturbances in forum threads or comments, such as picking fights, making off topic posts that ruin the thread, and/or insult other members
* Making non-constructive or derailing forum posts or comments.
* Bragging about saving DNP material, or encouraging others to save it
* Abusing the Report system or other website tools by sending false information or nonsensical messages
* Creating forum threads about existing topics less than six months old
* Creating a separate forum thread about an existing topic for further discussion in another forum category
* Creating a separate forum thread about an existing locked topic for further discussion in any forum or site
* Excessively posting old threads without adding anything to the discussion
* Excessively creating pointless threads like forum games, asking for opinions on site irrelevant themes, asking for free art, etc
* Numbering a thread, IBTL, ITT, TL;DR, or any other fad statements

"[Code of Conduct - Spamming or Trolling]":/wiki/show?title=e621:rules#spamming	[/section]
`
	}),

	Record.button({
		title: 'Tagging Abuse/Tagging Vandalism',
		records: `[section=Tagging Abuse / Tagging Vandalism]
[b]This category includes:[/b]

* Failure to cite a minimum of 4 tags to an uploaded post
* Adding a tag to a post that is not either clearly visible, or reasonably assumed
* Removing a valid tag, either as part of a dispute/argument, or to place one that is not correct
* Failure to properly set the rating of your upload ("Help Ratings":/help/ratings)
* Knowingly adding or editing a post source to an incorrect link
* Adding invalid/disruptive tags, or any tags that could be considered as defamatory or spam
* Using Unicode in tags, with the exception of foreign artist/character names

"[Code of Conduct - Tagging Abuse / Tagging Vandalism]":/wiki/show?title=e621:rules#taggingabuse [/section]
`
	}),

);

},{"./../../source/nodes/nodes.js":16,"./../../source/section.js":18}],4:[function(require,module,exports){
const Section = require('./../../source/section.js');
const Record = require('./../../source/nodes/nodes.js');

Section.create(
	{
		title: 'Uncommon',
		levels: ['negative', 'neutral']
	},

	Record.button({
		title: 'Advertising',
		records: `[section=Advertising][b]This category includes:[/b]

* Any non-beneficial, non-approved related businesses, organizations, or websites
* Can be linked with Spamming or Trolling if it is used multiple times in a short period of time

"[Code of Conduct - Advertising]":/wiki/show?title=e621:rules#advertising [/section]
`
	}),

	Record.button({
		title: 'Backseat Moderating',
		records: `[section=Backseat Moderating][b]This category includes:[/b]

* Implying moderator/administrator privileges where none exist
* Non-administrator/moderator/staff threatening to use disciplinary actions against another user
* Demanding, ordering, or otherwise stating to an administrator/moderator/staff certain administrative actions to be taken against another user

"[Code of Conduct - Backseat Moderating]":/wiki/show?title=e621:rules#backseatmod [/section]
`
	}),

	Record.button({
		title: 'Bestiality',
		records: `[section=Bestiality][b]This category includes:[/b]

* Creating a post, forum post, or thread that is an inappropriate reference to real-life bestiality, sexual relations, or bodily functions
* Linking or commenting on a website that promotes material that contains inappropriate references to real-life bestiality, sexual relations, or bodily functions
* Linking to explicit, real-life material involving animal genitalia or animals mating

"[Code of Conduct - Bestiality]":/wiki/show?title=e621:rules#bestiality [/section]
`
	}),

	Record.button({
		title: 'Circumventing a Suspension / Ban',
		records: `[section=Circumventing a Suspension / Ban][b]This category includes:[/b]

* Posting anything on another account
* Having someone post on your behalf

"[Code of Conduct - Circumventing a Suspension / Ban]":/wiki/show?title=e621:rules#banevading [/section]
`
	}),

	Record.button({
		title: 'Disregard of the Site Administration',
		records: `[section=Disregard of the Site Administration][b]This category includes:[/b]

* Failure to abide by direct instructions by an administrator, moderator, and/or employee of Bad Dragon or Dragonfruit

"[Code of Conduct - Disregard of the Site Administration]":/wiki/show?title=e621:rules#disregardofadmin [/section]
`
	}),

	Record.button({
		title: 'Doxxing',
		records: `[section=Distribution of Real-Life Personal Information][b]This category includes:[/b]

* Releasing or assisting in releasing any real-life information about other members or employees of Bad Dragon, Dragonfruit, or e621, or anyone else

"[Code of Conduct - Distribution of Real-Life Personal Information]":/wiki/show?title=e621:rules#distributionofrlinfo [/section]
`
	}),

	Record.button({
		title: 'Extreme Sexuality / Violence',
		records: `[section=Extreme Sexuality / Violence][b]This category includes:[/b]

* Linking to websites that refer to extreme real-life violent sexual activity
* Linking to websites that refer to extreme real-life violence
* Linking to websites that refer to extreme kinks and/or fetishes

"[Code of Conduct - Extreme Sexuality / Violence]":/wiki/show?title=e621:rules#extremesexualityviolence [/section]
`
	}),

	Record.button({
		title: 'Illegal Activities or Drugs',
		records: `[section=Illegal Activities or Drugs][b]This category includes:[/b]

* Forum threads or comments that references to abusing illegal drugs
* Forum threads or comments that references to performing illegal activities

[i]Admitting to partaking in arson, bestiality, kidnapping, manslaughter or other similar serious crimes will lead to the permanent closure of your account. Being a convicted felon for any of the above crimes may also lead to the permanent closure of your account.[/i]

"[Code of Conduct - Illegal Drugs or Activities]":/wiki/show?title=e621:rules#illegalactivities [/section]
`
	}),

	Record.button({
		title: 'Impersonating an Employee or Moderator',
		records: `[section=Impersonating an Employee or Moderator][b]This category includes:[/b]

* Passing yourself off as a current or past employee of Bad Dragon, Dragonfruit, or e621, especially to post false information
* Passing yourself off as a current or past moderator of Bad Dragon, Dragonfruit, or e621, especially to post false information
* Passing yourself off as another user to harass or besmirch them or their reputation

"[Code of Conduct - Impersonating an Employee]":/wiki/show?title=e621:rules#impersonatinganemployee [/section]
`
	}),

	Record.button({
		title: 'National, Racial, or Ethnic Hatred',
		records: `[section=National, Racial, or Ethnic Hatred][b]This category includes:[/b]

* Promoting national, racial, or ethnic hatred
* Creating posts, threads, or comments with recognized national, racial, or ethnic slurs
* Creating posts, threads, or comments with hateful content
* Alluding to symbols of national, racial, or ethnic hatred

"[Code of Conduct - National, Racial, or Ethnic Hatred]":/wiki/show?title=e621:rules#hatred [/section]
`
	}),

	Record.button({
		title: 'Plagiarism',
		records: `[section=Plagiarism][b]This category includes:[/b]

* Wrongfully claiming ownership of artwork
* Tracing artwork without the consent of the original owner or artist
* Repeatedly creating unauthorized edits after the original artist asked to stop

"[Code of Conduct - Plagiarism]":/wiki/show?title=e621:rules#plagiarism [/section]
`
	}),

	Record.button({
		title: 'Posting Hacks, Trojan Horses, Maleware, or Malicious Programs',
		records: `[section=Posting Hacks, Trojan Horses, or Malicious Programs][b]This category includes:[/b]

* Creating posts, threads, or comments that link to hacks or malicious programs/viruses

"[Code of Conduct - Posting Hacks, Trojan Horses, or Malicious Programs]":/wiki/show?title=e621:rules#postinghacks [/section]
`
	}),

	Record.button({
		title: 'Posting Unreleased Content / Hacking Data Files',
		records: `[section=Posting Unreleased Content / Hacking Data Files][b]This category includes:[/b]

* Showing unreleased content from anyone that has been discovered through unauthorized means
* Showing the results of successful or attempted hacks of the Bad Dragon, Dragonfruit, or e621 servers, websites, or affiliates
* Showing paid content, or creating forum posts or comments that link to content only available through paid subscription services
* Discuss, or display any data not available via public websites
* Quoting, or otherwise referencing, another user who posts illegal/paid content or data

"[Code of Conduct - Posting Unreleased Content / Hacking Data Files]":/wiki/show?title=e621:rules#postingunreleasedcontent [/section]
`
	}),	
	
	Record.button({
		title: 'Real-Life Threats',
		records: `[section=Real-Life Threats][b]This category includes:[/b]

* Language that refers to violence in any capacity against a person or persons

"[Code of Conduct - Real-Life Threats]":/wiki/show?title=e621:rules#rlthreats [/section]`
	}),

	Record.button({
		title: 'Religion / Politics',
		records: `[section=Major Religions, Religious Figures, Political Parties, or Political Figures][b]This category includes:[/b]

* Any discussion in forum posts, threads, or comments regarding major religions or religious figures
* Any discussion in forum posts, threads, or comments regarding major political parties or political figures

"[Code of Conduct - Major Religions, Religious Figures, Political Parties, or Political Figures]":/wiki/show?title=e621:rules#religioushatred [/section]
`
	}),

				Record.button({
		title: 'Sexual Orientation',
		records: `[section=Sexual Orientation][b]This category includes:[/b]

* Insultingly refer to any aspect of sexual orientation pertaining to themselves or other members

"[Code of Conduct - Sexual Orientation]":/wiki/show?title=e621:rules#sexualorientation [/section]
`
	}),

	Record.button({
		title: 'Solicitation',
		records: `[section=Solicitation][b]This category includes:[/b]

* Soliciting personal or otherwise confidential information of another user or users.
* Requesting, demanding, or offering to trade real life photographs, videos, or any other form of media from another user or users
* Requesting, demanding, or offering to trade information from another user or users

"[Code of Conduct - Solicitation]":/wiki/show?title=e621:rules#solicitation [/section]
`
	}),

);

},{"./../../source/nodes/nodes.js":16,"./../../source/section.js":18}],5:[function(require,module,exports){
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

},{"./../../source/nodes/nodes.js":16,"./../../source/section.js":18}],6:[function(require,module,exports){
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

},{"./../../source/create_section.js":10,"./../../source/nodes/nodes.js":16,"./../../source/section.js":18,"./../../source/utils.js":21}],7:[function(require,module,exports){
require('./../../source/init.js').everything();

require('./Utils.js');
require('./Decayed.js');
require('./Typical.js');
require('./Templates.js');
require('./Uncommon.js');
require('./Younglings.js');

// Run the initial hiding
require('./../../source/hide_nodes.js')();

},{"./../../source/hide_nodes.js":11,"./../../source/init.js":12,"./Decayed.js":1,"./Templates.js":2,"./Typical.js":3,"./Uncommon.js":4,"./Utils.js":5,"./Younglings.js":6}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
const { is_ban } = require('./site.js');

module.exports = (text) => {
	if (is_ban) {
		document.getElementById('ban_reason').value += text + ' ';
	} else {
		document.getElementById('user_feedback_body').value += text + ' ';
	}
};

},{"./site.js":19}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
	const select = document.getElementById('user_feedback_category');
	console.log("level = ", select.options[select.selectedIndex].value);
	return select.options[select.selectedIndex].value;
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

},{"./site.js":19}],12:[function(require,module,exports){
const css_string = require('./style.css');
const { add_style } = require('./../dependencies/add_style.js');
const filter_sections = require('./hide_nodes.js');

function remove_toJSON () {
	// Is this even an issue on the new site?
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
	document.getElementById('page').innerHTML += `
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
	const select = document.getElementById('user_feedback_category');
	if (select) {
		select.addEventListener('change', filter_sections);
	}
}

module.exports = {
	everything: init_everything
};

},{"./../dependencies/add_style.js":8,"./hide_nodes.js":11,"./style.css":20}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"./../add_record.js":9,"./../utils.js":21,"./standardize_options.js":17}],15:[function(require,module,exports){
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

},{"./../add_record.js":9,"./../utils.js":21,"./standardize_options.js":17}],16:[function(require,module,exports){
const elements = require('./elements.js');
const generic_buttons = require('./generic_buttons.js');
const lists = require('./lists.js');

module.exports = {
	...generic_buttons,
	...lists,
	...elements
};

},{"./elements.js":13,"./generic_buttons.js":14,"./lists.js":15}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
const site = (() => {
	const path = window.location.pathname;
	if (path.includes('/bans/new')) {
		return 'ban';
	} else if (path.includes('/user_feedbacks/new')) {
		return 'create';
	} else {
		return 'edit';
	}
})();

module.exports = {
	is_ban: site === 'ban',
	is_edit: site === 'edit',
	is_create: site === 'create'
};

},{}],20:[function(require,module,exports){
module.exports = "#record_table .hidden {\n\tdisplay: none;\n}\n\n#record_table button {\n\tmargin-right: 3px;\n\tborder-radius: 4px;\n\tborder: 1px solid black;\n\tpadding: 2px 6px;\n}\n\n#record_table input[type=text] {\n\tmargin: 0px;\n\tbox-shadow: none;\n\ttop: 0;\n\theight: 1em;\n\tborder-radius: 3px;\n\tborder: 1px solid black;\n\tpadding: 2px;\n}\n\n#record_table select {\n\tborder-radius: 3px;\n\tbox-shadow: none;\n\tmargin-top: 0;\n\ttop: 0;\n\tpadding: 0px;\n\tborder: 1px solid black;\n}\n\n#record_table td { padding-bottom: 1em; }\n\n/* Bold the title of sections */\n#record_table td:first-child { font-weight: 700; }\n";

},{}],21:[function(require,module,exports){
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

},{}]},{},[7]);
