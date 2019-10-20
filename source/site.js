const site = (() => {
	const path = window.location.pathname;
	if (path.includes('/user/block')) {
		return 'ban';
	} else if (path.includes('/user_record/edit')) {
		return 'edit';
	} else {
		return 'create';
	}
})();

module.exports = {
	is_ban: site === 'ban',
	is_edit: site === 'edit',
	is_create: site === 'create'
};
