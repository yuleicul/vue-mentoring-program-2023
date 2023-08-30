import type { SearchBy, SortBy } from '../composables/useSearch.ts'

const MOCK_DATA = [
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/l/public/p1910897532.webp'
  },
  {
    title: 'The Shawshank Redemption',
    genres: ['Drama', 'Crime'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/l/public/p480747492.webp'
  },
  {
    title: 'The Godfather',
    genres: ['Drama', 'Crime'],
    releaseYear: '1972',
    postUrl: 'https://img2.doubanio.com/view/photo/m/public/p1302620183.webp'
  },
  {
    title: 'The Dark Knight',
    genres: ['Action', 'Crime', 'Drama'],
    releaseYear: '2008',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p462657443.webp'
  },
  {
    title: 'Pulp Fiction',
    genres: ['Crime', 'Drama'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910902213.webp'
  },
  {
    title: 'Forrest Gump',
    genres: ['Drama', 'Romance'],
    releaseYear: '1994',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.webp'
  },
  {
    title: 'The Matrix',
    genres: ['Action', 'Sci-Fi'],
    releaseYear: '1999',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p451926968.webp'
  },
  {
    title: 'The Silence of the Lambs',
    genres: ['Horror', 'Thriller'],
    releaseYear: '1991',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1593414327.webp'
  },
  {
    title: 'Inception',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    releaseYear: '2010',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p513344864.webp'
  },
  {
    title: "Schindler's List",
    genres: ['Drama', 'History'],
    releaseYear: '1993',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p492406163.webp'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    genres: ['Action', 'Adventure', 'Drama'],
    releaseYear: '2003',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910825503.webp'
  },
  {
    title: 'The Prestige',
    genres: ['Drama', 'Mystery', 'Thriller'],
    releaseYear: '2006',
    postUrl: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480383375.webp'
  }
]

export default async function fetchMovies(input: string, searchBy: SearchBy, sortBy: SortBy) {
  return MOCK_DATA.filter((movie) => {
    if (searchBy === 'title') {
      return movie.title.toLowerCase().includes(input.toLowerCase())
    } else if (searchBy === 'genre') {
      return movie.genres.join(' ').toLowerCase().includes(input.toLowerCase())
    }
  }).sort((prev, curr) => {
    if (sortBy === 'release date') {
      return +curr.releaseYear - +prev.releaseYear
    }
    return 0
  })
}
