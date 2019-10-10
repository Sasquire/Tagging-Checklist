// This file handles the tags present in a hidden
// element. These tags are never applied to the
// post, but can be used as specific checks for
// deciding if a section is to appear visible.

const Requires = require('./../../source/requires.js');

function get () {
	return document.getElementById('question_keys')
		.value
		.split(' ')
		.filter(e => e);
}

function set (tags) {
	document.getElementById('question_keys').value = tags.join(' ');
	Requires.apply(tags);
}

function add (tags) {
	const all_new_tags = get().concat(tags);
	set(all_new_tags);
}

function remove (tags) {
	const all_new_tags = get()
		.filter(e => tags.includes(e) === false);
	set(all_new_tags);
}

module.exports = {
	get: get,
	set: set,
	add: add,
	remove: remove
};
