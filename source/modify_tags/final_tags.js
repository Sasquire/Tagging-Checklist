// This module focuses on interactions with
// the post_tags element on the upload page of
// e621. In the future it should interact cleanly
// with the tags on a post's page.

const Requires = require('./../../source/requires.js');

function get () {
	return document.getElementById('post_tags')
		.value
		.split(' ')
		.filter(e => e);
}

function set (tags) {
	document.getElementById('post_tags').value = tags.join(' ');
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
