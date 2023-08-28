import type { Meta, StoryObj } from '@storybook/vue3'
import SearchButton from './SearchButton.vue'

const meta = {
  title: 'Netflix/SearchButton',
  component: SearchButton,
  tags: ['autodocs']
} satisfies Meta<typeof SearchButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
