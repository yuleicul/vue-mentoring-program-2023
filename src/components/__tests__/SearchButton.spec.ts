import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchButton from '../SearchButton.vue'

describe('SearchButton', () => {
  it('renders the a button with the correct text', () => {
    const buttonText = 'Search'
    const wrapper = mount(SearchButton)

    expect(wrapper.find('button').text()).toBe(buttonText)
  })

  it('emits a click event when clicked', async () => {
    const wrapper = mount(SearchButton)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
