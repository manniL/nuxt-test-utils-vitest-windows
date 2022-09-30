import { fileURLToPath } from 'url'
import { it, expect } from 'vitest'
import { setup, useTestContext } from '@nuxt/test-utils'

await setup({
  rootDir: fileURLToPath(new URL('../playground', import.meta.url))
})

it('should finish on windows', () => {
  const _ctx = useTestContext()
  expect(true).toBe(true) // Tests run but it never finishes
})
