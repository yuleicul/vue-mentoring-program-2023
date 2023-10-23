import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import MovieCard from '../MovieCard.vue'
import mockMovies from './mock-movies.json'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn()
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

const mockMovie = mockMovies[0]

describe('MovieCard', () => {
  it('renders properly', () => {
    const wrapper = mount(MovieCard, {
      props: mockMovie
    })

    expect(wrapper.get('[data-testid="movie-card-title"]').text()).toBe(mockMovie.title)
    expect(wrapper.get('[data-testid="movie-card-year"]').text()).toBe(mockMovie.year)
    expect(wrapper.get('[data-testid="movie-card-genres"]').text()).toBe(
      mockMovie.genres.join(' & ')
    )
    expect(wrapper.get('img').attributes().src).toBe(undefined)
  })
})
