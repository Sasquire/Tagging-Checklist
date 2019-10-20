function random_from_array (array) {
	return array[Math.floor(Math.random() * array.length)];
}

function random_from_node (node) {
	return random_from_array(JSON.parse(node.dataset.records));
}

function readable_text (...args) {
	return args.join('\n');
}

module.exports = {
	random_from_node: random_from_node,
	r: readable_text
};
