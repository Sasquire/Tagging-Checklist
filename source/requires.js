const { set_node_class } = require('./utils.js');

function test_requires (requires_string, tags) {
	// "male penis; herm; female strapon"
	// Turns into
	// [
	//   ["male", "penis"],
	//   ["herm"],
	//   ["female", "strapon"]
	// ]
	const requires_object = requires_string
		.split(';')
		.filter(e => e)
		.map(e => e.split(' ').filter(p => p));

	// Where in some subset of the requires object, every tag
	// in that subset is included in the tags object.

	// Returns true when an object should be displayed
	return requires_object.some(row => row.every(tag => tags.includes(tag)));
}

// TODO: Change this function to be more efficient
function toggle_hidden_button_sections (all_tags) {
	const hidable = Array.from(document.getElementsByClassName('hidable'));

	// Reset everything
	hidable.forEach(e => e.classList.remove('hidden'));

	hidable
		.map(node => ({
			node: node,
			requires: node.dataset.requires
		}))
		.filter(e => e.requires.length !== 0) // Only check nodes that need it
		.forEach(e => optional_hide(e.node, e.requires));

	// If every node inside this section is hidden, hide the section
	hidable
		.map(node => ({
			node: node,
			type: node.nodeName
		}))
		.filter(e => e.type === 'TR')
		.forEach(e => {
			const hidable_inside = Array.from(e.node.getElementsByClassName('hidable'));
			const all_hidden = hidable_inside.every(p => p.classList.contains('hidden'));

			if (all_hidden && hidable_inside.length > 0) {
				e.node.classList.add('hidden');
			}
		});

	function optional_hide (node, requires_object) {
		const should_display = test_requires(requires_object, all_tags);
		set_node_class(node, 'hidden', !should_display);
	}
}

module.exports = {
	test: test_requires,
	apply: toggle_hidden_button_sections
};
