// Filled with small utilities that are useful
// across multiple different files

function highlight_section_of (child_node) {
	child_node.parentNode.parentNode.classList.add('highlighted');
}

function set_node_class (node, classname, should) {
	if (should) {
		node.classList.add(classname);
	} else {
		node.classList.remove(classname);
	}
}

function find_nodes_with_regex (type, regex) {
	return Array.from(document.getElementsByTagName(type))
		.filter(e => regex.test(e.innerText));
}

function remove_tag_with_regex (type, regex) {
	find_nodes_with_regex(type, regex)
		.forEach(e => e.parentNode.parentNode.remove());
}

module.exports = {
	highlight_section_of: highlight_section_of,
	set_node_class: set_node_class,
	find_nodes_with_regex: find_nodes_with_regex,
	remove_tag_with_regex: remove_tag_with_regex
};
