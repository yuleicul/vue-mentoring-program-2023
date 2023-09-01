import type { SearchBy, SortBy } from '../composables/useMovies.js'

const MOCK_DATA = [
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/l/public/p1910897532.webp',
    rating: 8.0,
    duration: '2h 17min'
  },
  {
    title: 'The Shawshank Redemption',
    genres: ['Drama', 'Crime'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/l/public/p480747492.webp',
    rating: 9.3,
    duration: '2h 22min'
  },
  {
    title: 'The Godfather',
    genres: ['Drama', 'Crime'],
    releaseYear: '1972',
    postUrl: 'https://img2.doubanio.com/view/photo/m/public/p1302620183.webp',
    rating: 9.2,
    duration: '2h 55min'
  },
  {
    title: 'The Dark Knight',
    genres: ['Action', 'Crime', 'Drama'],
    releaseYear: '2008',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p462657443.webp',
    rating: 9.0,
    duration: '2h 32min'
  },
  {
    title: 'Pulp Fiction',
    genres: ['Crime', 'Drama'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910902213.webp',
    rating: 8.9,
    duration: '2h 34min'
  },
  {
    title: 'Forrest Gump',
    genres: ['Drama', 'Romance'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.webp',
    rating: 8.8,
    duration: '2h 22min'
  },
  {
    title: 'The Matrix',
    genres: ['Action', 'Sci-Fi'],
    releaseYear: '1999',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p451926968.webp',
    rating: 8.7,
    duration: '2h 16min'
  },
  {
    title: 'The Silence of the Lambs',
    genres: ['Horror', 'Thriller'],
    releaseYear: '1991',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1593414327.webp',
    rating: 8.6,
    duration: '1h 58min'
  },
  {
    title: 'Inception',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    releaseYear: '2010',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p513344864.webp',
    rating: 8.8,
    duration: '2h 28min'
  },
  {
    title: "Schindler's List",
    genres: ['Drama', 'History'],
    releaseYear: '1993',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p492406163.webp',
    rating: 8.9,
    duration: '3h 15min'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    genres: ['Action', 'Adventure', 'Drama'],
    releaseYear: '2003',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910825503.webp',
    rating: 9.0,
    duration: '3h 21min'
  },
  {
    title: 'The Prestige',
    genres: ['Drama', 'Mystery', 'Thriller'],
    releaseYear: '2006',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480383375.webp',
    rating: 8.5,
    duration: '2h 10min'
  }
]

export type Movie = {
  title: string
  releaseYear: string
  genres: string[]
  postUrl: string
  rating: number
  duration: string
}

export default async function fetchMovies(input: string, searchBy: SearchBy, sortBy: SortBy) {
  const filteredMovies = filterMovies(input, searchBy, MOCK_DATA)
  const sortedMovies = sortMovies(sortBy, filteredMovies)
  return sortedMovies
}

function filterMovies(input: string, searchBy: SearchBy, movies: Movie[]) {
  return movies.filter((movie) => {
    if (searchBy === 'title') {
      return movie.title.toLowerCase().includes(input.toLowerCase())
    } else if (searchBy === 'genre') {
      return movie.genres.join(' ').toLowerCase().includes(input.toLowerCase())
    }
  })
}

function sortMovies(sortBy: SortBy, movies: Movie[]) {
  return movies.sort((prev, curr) => {
    if (sortBy === 'release date') {
      return +curr.releaseYear - +prev.releaseYear
    } else if (sortBy === 'rating') {
      return curr.rating - prev.rating
    }
    return 0
  })
}
