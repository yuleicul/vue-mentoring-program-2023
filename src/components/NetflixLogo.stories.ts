import type { Meta, StoryObj } from '@storybook/vue3'
import NetflixLogo from './NetflixLogo.vue'

const meta = {
  title: 'Netflix/NetflixLogo',
  component: NetflixLogo,
  tags: ['autodocs']
} satisfies Meta<typeof NetflixLogo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
