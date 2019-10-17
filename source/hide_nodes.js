const is_ban = require('./is_ban.js');

function apply_level (level) {
	const sections = document.querySelectorAll('#record_table_body > tr');

	Array.from(sections).forEach(e => e.classList.remove('hidden'));

	Array.from(sections)
		// Sections that do not include the selected string
		.filter(e => !JSON.parse(e.dataset.levels).includes(level))
		.forEach(e => e.classList.add('hidden'));
}

function find_level () {
	const select = document.getElementById('user_record_score');
	const level = parseInt(select.options[select.selectedIndex].value, 10);
	// 1 is positive, 0 is neutral, -1 is negative
	return ['negative', 'neutral', 'positive'][level + 1];
}

function filter () {
	if (is_ban) {
		apply_level('negative');
	} else {
		const level = find_level();
		apply_level(level);
	}
};

module.exports = filter;
