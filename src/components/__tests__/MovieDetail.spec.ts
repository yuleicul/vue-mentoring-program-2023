import { VueWrapper, mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useMovieDetailStore } from '@/stores/movieDetail'
import MovieDetail from '../MovieDetail.vue'
import mockMovies from './mock-movies.json'
import NetflixLogo from '../NetflixLogo.vue'

const mockMovie = mockMovies[0]

describe('MovieDetail', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(MovieDetail, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movieDetail: {
                movie: mockMovie
              }
            },
            createSpy: vi.fn
          })
        ]
      }
    })
  })

  it('renders text properly', () => {
    expect(wrapper.get('[data-testid=movie-detail-title]').text()).toBe(mockMovie.title)
    expect(wrapper.get('[data-testid=movie-detail-imdbRating]').text()).toBe(
      `${mockMovie.imdbRating}`
    )
    expect(wrapper.get('[data-testid=movie-detail-genres]').text()).toBe(
      mockMovie.genres.join(' & ')
    )
    expect(wrapper.get('[data-testid=movie-detail-storyline]').text()).toBe(mockMovie.storyline)
  })

  it('renders component NetflixLogo', () => {
    expect(wrapper.findComponent(NetflixLogo).exists()).toBe(true)
  })

  it('displays movie poster', () => {
    expect(wrapper.get('img').attributes('src')).toBe(mockMovie.posterurl)
  })

  it('calls setMovie when 🔍 button is clicked', async () => {
    wrapper.get('[data-testid=movie-detail-back-to-search]').trigger('click')

    expect(useMovieDetailStore().setMovie).toHaveBeenCalledWith(null)
  })
})
