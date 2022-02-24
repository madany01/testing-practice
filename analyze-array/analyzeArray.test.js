import analyze from './analyzeArray'

describe('analyzeArray', () => {
	it('works when happy path', () => {
		expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		})
	})

	it('works when arrays is empty', () => {
		expect(analyze([])).toStrictEqual({
			average: NaN,
			min: null,
			max: null,
			length: 0,
		})
	})

	it('works when array length is 1', () => {
		expect(analyze([1])).toStrictEqual({
			average: 1,
			min: 1,
			max: 1,
			length: 1,
		})
	})

	it('works when all numbers are the same', () => {
		expect(analyze([3, 3, 3])).toStrictEqual({
			average: 3,
			min: 3,
			max: 3,
			length: 3,
		})
		expect(analyze([4, 4, 4])).toStrictEqual({
			average: 4,
			min: 4,
			max: 4,
			length: 3,
		})
	})

	it('preserves floating point', () => {
		const object = analyze([0.5, 1.5, 3.4, 2.3])
		expect(object.average).toBeCloseTo(1.925)
		delete object.average
		expect(object).toStrictEqual({
			min: 0.5,
			max: 3.4,
			length: 4,
		})
	})
})
