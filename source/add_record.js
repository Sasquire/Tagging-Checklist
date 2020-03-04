const { is_ban } = require('./site.js');

module.exports = (text) => {
	if (is_ban) {
		document.getElementById('ban_reason').value += text + ' ';
	} else {
		document.getElementById('user_feedback_body').value += text + ' ';
	}
};
