import type { Meta, StoryObj } from '@storybook/vue3'
import SearchInput from './SearchInput.vue'

const meta = {
  title: 'Netflix/SearchInput',
  component: SearchInput,
  tags: ['autodocs']
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
