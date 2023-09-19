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
    year: '1994',
    posterurl: 'https://img2.doubanio.com/view/photo/l/public/p1910897532.webp'
  }
}
