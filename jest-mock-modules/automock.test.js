import { f, g } from './someModule'

// if jest.mock exists, it affects all the tests in all scopes
// jest.mock must be outside any scope
jest.mock('./someModule')

describe('auto mocking', () => {
	it('automatically replaces module function implementations with undefined', () => {
		expect(f()).toBe(undefined)
		expect(g()).not.toBe('original g')
	})

	it('spies on module function', () => {
		f()
		expect(f).toBeCalled()
	})
})
