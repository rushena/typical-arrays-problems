
exports.min = function min (array) {
	if (!array) return 0;
	if (array.length < 1) return 0;
	return array.reduce((acc, item) => item < acc ? item : acc, Infinity)
}

exports.max = function max (array) {
	if (!array) return 0;
	if (array.length < 1) return 0;
	return array.reduce((acc, item) => item > acc ? item : acc, -Infinity)
}

exports.avg = function avg (array) {
	if (!array) return 0;
	if (array.length < 1) return 0;
	const sum = array.reduce((acc, item) => acc + item, 0 );
	return sum / array.length;
}
