const reverse = require('./reverseString')

describe('reverseString', () => {
	it('Works in happy path', () => {
		expect(reverse('abc')).toBe('cba')
	})

	it('Works with empty string', () => {
		expect(reverse('')).toBe('')
	})

	it('Works with single character string', () => {
		expect(reverse('a')).toBe('a')
	})

	it('Works with single character string', () => {
		expect(reverse('a')).toBe('a')
	})

	it('Preserve letters case', () => {
		expect(reverse('aBcDe')).toBe('eDcBa')
	})

	it('Works for even-length string', () => {
		expect(reverse('abcd')).toBe('dcba')
	})

	it('Works for odd-length string', () => {
		expect(reverse('abxcd')).toBe('dcxba')
	})

	it('Works for odd-length string', () => {
		expect(reverse('abxcd')).toBe('dcxba')
	})

	it('Works if string contains duplicate characters', () => {
		expect(reverse('abaacdaa')).toBe('aadcaaba')
	})

	it('Works with non-letters', () => {
		expect(reverse('123 .!@#')).toBe('#@!. 321')
	})
})
