import type { Meta, StoryObj } from '@storybook/vue3'
import Logo from './Logo.vue'

const meta = {
  title: 'Netflix/Logo',
  component: Logo,
  tags: ['autodocs']
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
