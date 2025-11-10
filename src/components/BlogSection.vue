<template>

    <section class="px-8 md:px-20 py-16">
      <h1 class="text-6xl md:text-8xl font-bold mb-4 border-t-8">everworld</h1>
      <p class="text-black text-lg max-w-2xl">We’re on a mission to clean up a dirty industry.<br />
        These are the people, stories, and ideas that will help us get there.
      </p>
    </section>
    <section class="px-8 md:px-20 py-10">
      <h2 class="text-3xl font-bold mb-8">The Latest</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="post in latestPosts" :key="post.id" class="space-y-3">
          <RouterLink v-if="post.title === 'How To Style Winter Whites'" :to="{ name: 'BlogPost', params: { id: post.id } }"  class="block space-y-3">
            <img :src="post.image" :alt="post.title" class="title w-full h-[413px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition"  />
            <h3 class="text-lg font-semibold leading-snug">{{ post.title }}</h3>
            <span class="bg-white text-black text-sm text-center font-medium border rounded-full px-6 py-2 hover:bg-gray-400 hover:text-white transition">
              {{ post.category }}
            </span>
          </RouterLink>
          <div v-else class="space-y-3">
            <img :src="post.image" :alt="post.title" class="title w-full h-[413px] object-cover rounded-lg"  />
            <h3 class="text-lg font-semibold leading-snug">{{ post.title }}</h3>
            <span class="bg-white text-black text-sm text-center font-medium border rounded-full px-6 py-2 hover:bg-gray-400 hover:text-white transition" >
              {{ post.category }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <button class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Load More Articles</button>
      </div>
    </section>
    <section class="bg-white flex py-12">
        <img class="w-screen h-[225px]" src="/src/assets/img/BlogPage/keep-it-clean.png" alt="keep it clean banner" />
    </section>
    <section class="px-8 md:px-20 py-12 mb-10">
      <h2 class="text-3xl font-bold mb-8">Our Progress</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(progress, index) in progressItems" :key="index" class="space-y-3">
          <img :src="progress.image" :alt="progress.title" class="title rounded-lg w-full object-cover" />
          <span class="text-xl font-medium">{{ progress.title }}</span>
        </div>
      </div>
    </section>
    <section class="bg-black text-white justify-start py-16 pl-10">
      <h2 class="text-3xl font-semibold mb-6">Follow us on social for more</h2>
      <button class="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">@Everlane Instagram</button>
    </section>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const images = import.meta.glob('/src/assets/img/BlogPage/*.png', { eager: true, import: 'default' }) 
const latestPosts = [
  {
    id: 1,
    image: images ['/src/assets/img/BlogPage/winter-whites.png'],
    title: "How To Style Winter Whites",
    category: "Style",
  },
  {
    id: 2,
    image: images ['/src/assets/img/BlogPage/glossy-award.png'],
    title: "We Won A Glossy Award",
    category: "Transparency",
  },
  {
    id: 3,
    image: images ['/src/assets/img/BlogPage/matching-outfits.png'],
    title: "Coordinate Your Style: Matching Outfits for Everyone",
    category: "Style",
  },
  {
    id: 4,
    image: images ['/src/assets/img/BlogPage/black-friday.png'],
    title: "Black Friday Fund 2023",
    category: "Transparency",
  },
  {
    id: 5,
    image: images ['/src/assets/img/BlogPage/holiday-outfits-ideas.png'],
    title: "What to Wear this Season: Holiday Outfits & Ideas",
    category: "Style",
  },
  {
    id: 6,
    image: images ['/src/assets/img/BlogPage/thanksgiving-outfit.png'],
    title: "Thanksgiving Outfit Ideas",
    category: "Style",
  },
];

const progressItems = [
  {
    image: images ['/src/assets/img/BlogPage/carbon-commitment.png'],
    title: "Carbon Commitment",
  },
  {
    image: images ['/src/assets/img/BlogPage/environmental-initiatives.png'],
    title: "Environmental Initiatives",
  },
  {
    image: images ['/src/assets/img/BlogPage/better-factories.png'],
    title: "Better Factories",
  },
];
</script>

<style scoped>
img.title {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
img.title:hover {
  transform: scale(1.02);
  opacity: 0.95;
}
</style>