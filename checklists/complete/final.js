const Init = require('./../../source/init.js');
const Requires = require('./../../source/requires.js');
const Tags = require('./../../source/modify_tags/modify_tags.js');

Init.rating();
Init.parent_id('Ex. 6268');
Requires.apply(Tags.all());
