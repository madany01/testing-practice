import { f, g } from './someModule'

describe('no mocking', () => {
	it('stays as original', () => {
		expect(f()).toBe('original f')
		expect(g()).toBe('original g')
	})
})
