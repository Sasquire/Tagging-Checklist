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
