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

function highlight_option_tree (node) {
	highlight_section_of(node);
	node.classList.add('highlighted');
}

function find_nodes_with_regex (type, regex) {
	return Array.from(document.getElementsByTagName(type))
		.filter(e => regex.test(e.textContent));
}

function remove_tag_with_regex (type, regex) {
	find_nodes_with_regex(type, regex)
		.forEach(e => e.parentNode.parentNode.remove());
}

module.exports = {
	highlight_section_of: highlight_section_of,
	set_node_class: set_node_class,
	highlight_option_tree: highlight_option_tree,
	find_nodes_with_regex: find_nodes_with_regex,
	remove_tag_with_regex: remove_tag_with_regex
};
