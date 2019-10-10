
function array_cross (a1, a2) {
	const results = [];
	for (const v1 of a1) {
		for (const v2 of a2) {
			results.push([v1, v2]);
		}
	}
	return results;
}

function self_cross (arr) {
	return array_cross(arr, arr);
}

function half_array_cross (a1, a2) {
	const results = [];
	for (let i = 0; i < a1.length; i++) {
		for (let j = i; j < a2.length; j++) {
			results.push([a1[i], a2[j]]);
		}
	}
	return results;
}

function self_half_cross (arr) {
	return half_array_cross(arr, arr);
}

module.exports = {
	cross: array_cross,
	self_cross: self_cross,
	half_cross: half_array_cross,
	self_half_cross: self_half_cross
};
