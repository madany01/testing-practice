const encrypt = require('./caesarCipher')

describe('caesarCipher', () => {
	it('works in happy path', () => {
		expect(encrypt('abc')).toBe('bcd')
	})

	it('works with empty string', () => {
		expect(encrypt('')).toBe('')
	})

	it('preserves non-letter characters', () => {
		expect(encrypt('a12#$ ,.\t\n')).toBe('b12#$ ,.\t\n')
	})

	it('respects letter case', () => {
		expect(encrypt('aBcD')).toBe('bCdE')
	})

	it('wraps letter z to a', () => {
		expect(encrypt('zz')).toBe('aa')
	})

	it('works (mixed)', () => {
		expect(encrypt('d f Z E 5 !@#+')).toBe('e g A F 5 !@#+')
	})
})
