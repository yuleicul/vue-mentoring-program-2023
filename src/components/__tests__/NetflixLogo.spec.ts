import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NetflixLogo from '../NetflixLogo.vue'

describe('NetflixLogo', () => {
  it('renders properly', () => {
    const wrapper = mount(NetflixLogo)
    expect(wrapper.text()).toContain('netflixroulette')
  })
})
