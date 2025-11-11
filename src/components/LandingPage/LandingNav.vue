<template>
    <div>
      <nav class="flex justify-center gap-5 mt-4 mb-4">
        <RouterLink to="#" class="text-gray-800 hover:underline">Holiday Gifting</RouterLink>
        <RouterLink to="/listing" class="text-gray-800 hover:underline">New Arrivals</RouterLink>
        <RouterLink to="#" class="text-gray-800 hover:underline">Best Sellers</RouterLink>
        <RouterLink to="#" class="text-gray-800 hover:underline">Clothing</RouterLink>
        <RouterLink to="#" class="text-gray-800 hover:underline">Tops & Sweaters</RouterLink>
        <RouterLink to="#" class="text-gray-800 hover:underline">Pants & Jeans</RouterLink>
        <RouterLink to="/product/:id" class="text-gray-800 hover:underline">Outerwear</RouterLink>
        <RouterLink to="#" class="text-red-700 hover:underline">Sale</RouterLink>
      </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>