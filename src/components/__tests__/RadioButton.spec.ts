import { mount } from '@vue/test-utils'
import RadioButton from '../RadioButton.vue'
import { describe, it, expect } from 'vitest'

describe('RadioButton', () => {
  const props = {
    name: 'colors',
    ids: ['red', 'green', 'blue'],
    modelValue: 'red'
  }

  it('renders the appropriate radio labels', () => {
    const wrapper = mount(RadioButton, {
      props
    })

    const radioLabels = wrapper.findAll('label')

    expect(radioLabels[0].text()).toBe('red')
    expect(radioLabels[1].text()).toBe('green')
    expect(radioLabels[2].text()).toBe('blue')
  })

  it('sets the value of the selected radio button', async () => {
    const wrapper = mount(RadioButton, {
      props
    })

    const radioButtons = wrapper.findAll('input[type="radio"]')

    expect(radioButtons[0].element.checked).toBe(true)

    await radioButtons[2].trigger('click')

    expect(radioButtons[2].element.checked).toBe(true)
  })
})
