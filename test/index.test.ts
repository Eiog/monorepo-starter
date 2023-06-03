import { describe, expect, it } from 'vitest'
import { foo } from 'pkg-name'

describe('pkg-name', () => {
  it('should export foo', () => {
    expect(foo).toBe('foo')
  })
})
