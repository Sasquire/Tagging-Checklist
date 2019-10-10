const custom_tags = require('./custom_tags.js');
const elements = require('./elements.js');
const generic_buttons = require('./generic_buttons.js');
const lists = require('./lists.js');

module.exports = {
	...generic_buttons,
	...custom_tags,
	...lists,
	...elements
};
