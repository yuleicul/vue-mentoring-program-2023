<script lang="ts" setup>
import SearchHeader from '../components/SearchHeader.vue'
import SearchContent from '../components/SearchContent.vue'
import Logo from '../components/Logo.vue'
const MOVIES = [
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
  }
]
</script>

<template>
  <div class="w-full bg-netflix-gray-55 flex flex-col items-center">
    <div class="w-[1200px] shadow-2xl">
      <SearchHeader />
      <SearchContent :movies="MOVIES" />
      <div class="flex items-center justify-center h-16 bg-netflix-gray-42">
        <Logo />
      </div>
    </div>
  </div>
</template>
