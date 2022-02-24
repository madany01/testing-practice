import { f, g } from './someModule'

jest.mock('./someModule', () => ({
	...jest.requireActual('./someModule.js'),
	g: jest.fn().mockImplementation(() => 'mock g'),
}))

describe('partially mocked module', () => {
	it('preserves non-mocked functions', () => {
		expect(f()).toBe('original f')
	})

	it('returns the mocked implementation of specified functions', () => {
		expect(g()).toBe('mock g')
	})
})
