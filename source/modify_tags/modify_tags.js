// This file is the interaction between the
// question tags and the final tags. This should
// be the area in which the rest of the script
// interacts with the saved and unsaved tags.

const questions = require('./question_tags.js');
const finals = require('./final_tags.js');

// The node must be passed in, and it represents
// the node from where the tags are being added.
// This is because questions are defined by a
// class attached to the button.
function modify_tags (tags, adding, node) {
	if (node.classList.contains('question')) {
		if (adding === true) {
			questions.add(tags);
		} else {
			questions.remove(tags);
		}
	} else {
		if (adding === true) {
			finals.add(tags);
		} else {
			finals.remove(tags);
		}
	}
}

function get_everything () {
	return questions.get().concat(finals.get());
}

module.exports = {
	modify: modify_tags,
	all: get_everything
};
