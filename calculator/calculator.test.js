import {
	add, sub, mul, div,
} from './calculator'

describe('calculator', () => {
	describe('add function', () => {
		it('Works in happy path', () => {
			expect(add(1, 2)).toBe(3)
		})
	})
	describe('subtract function', () => {
		it('Works in happy path', () => {
			expect(sub(1, 2)).toBe(-1)
		})
	})

	describe('multiplication function', () => {
		it('Works in happy path', () => {
			expect(mul(1, 2)).toBe(2)
		})
	})

	describe('division function', () => {
		it('Works in happy path', () => {
			expect(div(6, 3)).toBe(2)
		})

		it('Returns inf when denominator is zero', () => {
			expect(div(1, 0)).toBe(Infinity)
		})
	})
})
