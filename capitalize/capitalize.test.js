const capitalize = require('./capitalize')

describe('capitalize', () => {
	it('Works happy path', () => {
		expect(capitalize('abc')).toBe('Abc')
	})

	it('Works with empty string', () => {
		expect(capitalize('')).toBe('')
	})

	it('Works with one character string', () => {
		expect(capitalize('a')).toBe('A')
	})

	it('Preserves non-letters', () => {
		expect(capitalize('123$%^ ,.')).toBe('123$%^ ,.')
	})

	it('Preserves non-first letters case', () => {
		expect(capitalize('abCD')).toBe('AbCD')
	})

	it('Works if first letter is capitalized', () => {
		expect(capitalize('Abc')).toBe('Abc')
	})
})
