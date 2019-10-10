function label_generic (...text) {
	const label = document.createElement('label');
	const nodes = text.map(e => {
		if (typeof e === 'object') {
			return e;
		} else {
			const span = document.createElement('span');
			span.innerText = e;
			return span;
		}
	});

	nodes.forEach(e => label.appendChild(e));

	return label;
};

function url_elem (text, link) {
	const node = document.createElement('a');
	node.href = link;
	node.innerText = text;
	return node;
};

function br_elem () {
	return document.createElement('br');
};

const labels = {};

// Create custom label functions so they can
// be filtered based on importance. 9 is the
// most important while 0 is the least important
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(e => {
	const name = `label${e}`;
	labels[name] = (...texts) => {
		const label = label_generic(...texts);
		label.classList.add(name);
		return label;
	};
});

module.exports = {
	url: url_elem,
	br: br_elem,
	...labels
};
