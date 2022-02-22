function analyze(array = []) {
	if (array.length === 0) {
		return {
			min: null, max: null, length: array.length, average: NaN,
		}
	}

	return {
		length: array.length,
		min: Math.min(...array),
		max: Math.max(...array),
		average: array.reduce((acc, cur) => acc + cur) / array.length,
	}
}

module.exports = analyze
