<template>
  <main class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="text-center text-3xl font-semibold  mb-4">Stores</h1>
    <p class="text-center text-base font-medium mb-16">Find one of our 11 stores nearest you.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div v-for="store in stores" :key="store.city" class="flex flex-col items-start">
        <img :src="store.image" :alt="store.name" class="w-full h-72 object-cover rounded-lg" />
        <div class="mt-4 text-xs uppercase tracking-wide font-medium text-gray-600"> {{ store.city }} </div>
        <div class="text-base font-semibold text-gray-800"> {{ store.name }} </div>
      </div>
    </div>
  </main>
</template>  

<script setup>
const stores = [
  {
    city: 'Seattle',
    name: 'University Village',
    image: '/src/assets/img/StoresPage/store-seattle.png',
  },
  {
    city: 'San Francisco',
    name: 'Valencia Street, San Francisco',
    image: '/src/assets/img/StoresPage/store-sanfrancisco.png',
  },
  {
    city: 'Palo Alto',
    name: 'Stanford',
    image: '/src/assets/img/StoresPage/store-stanford.png',
  },
  {
    city: 'Los Angeles',
    name: 'Abbot Kinney',
    image: '/src/assets/img/StoresPage/store-losangeles.png',
  },
  {
    city: 'Boston',
    name: 'Seaport',
    image: '/src/assets/img/StoresPage/store-boston.png',
  },
  {
    city: 'New York',
    name: 'Prince Street, New York',
    image: '/src/assets/img/StoresPage/store-newyork.png',
  },
  {
    city: 'Brooklyn',
    name: 'Williamsburg',
    image: '/src/assets/img/StoresPage/store-brooklyn.png',
  },
  {
    city: 'King of Prussia',
    name: 'King of Prussia',
    image: '/src/assets/img/StoresPage/store-kingofprussia.png',
  },
  {
    city: 'Georgetown',
    name: 'Georgetown',
    image: '/src/assets/img/StoresPage/store-georgetown.png',
  },
];
</script>

<style scoped>
img {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
img:hover {
  transform: scale(1.02);
  opacity: 0.95;
}
</style>
