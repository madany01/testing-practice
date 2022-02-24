import { f, g } from './someModule'

jest.mock('./someModule', () => ({
	f() { return 'mock f' },
	g() { return 'mock g' },
}))

describe('module factory mocked file', () => {
	it('returns mocked versions', () => {
		expect(f()).toBe('mock f')
	})

	it('can not spy on module implementation', () => {
		// f/g are not true mock function => we can't spy on them
		expect(() => expect(f).toBeCalled()).toThrow()
	})
})
