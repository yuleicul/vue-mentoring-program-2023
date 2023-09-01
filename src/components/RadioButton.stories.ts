import type { Meta, StoryObj } from '@storybook/vue3'
import RadioButton from './RadioButton.vue'

const meta = {
  title: 'Netflix/RadioButton',
  component: RadioButton,
  tags: ['autodocs']
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'filter',
    ids: ['title', 'genre'],
    modelValue: 'title'
  }
}
