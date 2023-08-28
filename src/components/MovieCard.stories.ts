import type { Meta, StoryObj } from '@storybook/vue3'
import MovieCard from './MovieCard.vue'

const meta = {
  title: 'Netflix/MovieCard',
  component: MovieCard,
  tags: ['autodocs']
} satisfies Meta<typeof MovieCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: '@/assets/kill-bill.png'
  }
}
