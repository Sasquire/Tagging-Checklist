const site = (() => {
	const path = window.location.pathname;
	if (path.includes('/bans/new')) {
		return 'ban';
	} else if (path.includes('/user_feedbacks/new')) {
		return 'create';
	} else {
		return 'edit';
	}
})();

module.exports = {
	is_ban: site === 'ban',
	is_edit: site === 'edit',
	is_create: site === 'create'
};
