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