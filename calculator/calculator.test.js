const calculator = require('./calculator')

describe('calculator', () => {
	describe('add function', () => {
		it('Works in happy path', () => {
			expect(calculator.add(1, 2)).toBe(3)
		})
	})
	describe('subtract function', () => {
		it('Works in happy path', () => {
			expect(calculator.sub(1, 2)).toBe(-1)
		})
	})

	describe('multiplication function', () => {
		it('Works in happy path', () => {
			expect(calculator.mul(1, 2)).toBe(2)
		})
	})

	describe('division function', () => {
		it('Works in happy path', () => {
			expect(calculator.div(6, 3)).toBe(2)
		})

		it('Returns inf when denominator is zero', () => {
			expect(calculator.div(1, 0)).toBe(Infinity)
		})
	})
})
