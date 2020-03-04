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
