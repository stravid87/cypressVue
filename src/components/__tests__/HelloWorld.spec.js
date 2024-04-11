// This test fails because the TCP protocol is unavailable in WASM for some reason?
// "Post "http://localhost:5001/init-tunnel?backend=http://localhost:8000": dial tcp: lookup localhost: Protocol not available"
import { describe, it, expect, beforeEach } from 'vitest'
import layer8 from 'layer8_interceptor'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', async () => {
  beforeEach(async () => {
    try {
      await layer8.initEncryptedTunnel(
        {
          providers: ['http://localhost:8000'],
          proxy: 'http://localhost:5001' // works
        },
        'dev'
      )
    } catch (e) {
      console.log(e)
    }
  })

  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitested' } })
    expect(wrapper.text()).toContain('Hello Vitested')
  })
})
