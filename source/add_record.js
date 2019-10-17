const is_ban = require('./is_ban.js');

module.exports = (text) => {
	if (is_ban) {
		document.getElementById('ban_reason').value += text;
	} else {
		document.getElementById('user_record_body').value += text;
	}
};
