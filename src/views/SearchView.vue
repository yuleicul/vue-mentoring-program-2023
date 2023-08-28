<script lang="ts" setup>
import SearchHeader from '../components/SearchHeader.vue'
import SearchContent from '../components/SearchContent.vue'
import Logo from '../components/Logo.vue'
const MOVIES = [
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: '@/assets/kill-bill.png'
  },
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: '@/assets/kill-bill.png'
  },
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: '@/assets/kill-bill.png'
  },
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: '@/assets/kill-bill.png'
  },
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: '@/assets/kill-bill.png'
  },
  {
    title: 'Kill Bill: Vol 2',
    genres: ['Oscar winning movie', 'Action'],
    releaseYear: '1994',
    postUrl: '@/assets/kill-bill.png'
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
