<template>
  <div>
    <nav class="flex justify-center gap-5 mt-4 mb-4">
      <RouterLink to="/about" class="text-gray-800 hover:underline">About</RouterLink>
      <RouterLink to="/stores" class="text-gray-800 hover:underline">Stores</RouterLink>
      <RouterLink to="#" class="text-gray-800 hover:underline">Factories</RouterLink>
      <RouterLink to="#" class="text-gray-800 hover:underline">Environmental Initiatives</RouterLink>
      <RouterLink to="#" class="text-gray-800 hover:underline">Our Carbon Commitment</RouterLink>
      <RouterLink to="#" class="text-gray-800 hover:underline">Annual Impact Report</RouterLink>
      <RouterLink to="#" class="text-gray-800 hover:underline">Cleaner Fashion</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>