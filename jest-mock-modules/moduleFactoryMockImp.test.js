import { f, g } from './someModule'

jest.mock('./someModule', () => {
	let i = 0
	return {
		f: jest.fn().mockImplementation(() => `mock f ${++i}`),
		g: jest.fn().mockImplementation(() => 'mock g'),
	}
})

describe('module factory with true mock implementation', () => {
	it('returns mocked versions', () => {
		expect(f()).toBe('mock f 1')
	})

	it('spies on mock implementations', () => {
		f()
		expect(f).toBeCalled()
	})

	it('records mock function state', () => {
		expect(f()).toBe('mock f 3')
		expect(f).toBeCalledTimes(1)
		// toBeCalledTimes 1 not 3, because we configure jest to clear mock state on every test
	})
})
