<template>
  <header class="relative"> 
    <nav class="bg-black px-6 py-3 flex items-center justify-between">
      <div class="flex-grow flex justify-center m-2">
        <p class="text-white text-sm font-light">
          Get early access on launches and offers
          <a href="#" class="underline ml-1">Sign Up For Texts<svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" /></svg>
          </a>
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <img class="w-4 h-4 ml-2" src="/src/assets/img/HeaderSection/usd.png" alt="usd" />
        <span class="uppercase text-xs text-white">usd</span>
      </div>
    </nav>
    <div class="w-full border-b">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <nav class="flex items-center space-x-4 pb-3">
          <RouterLink to="/"  class="relative px-1 hover:border-b-2 hover:border-black transition-all duration-200" active-class="border-b-2 border-black">Women</RouterLink>
          <div class="relative" @mouseenter="showMenMenu = true" @mouseleave="showMenMenu = false">
            <RouterLink to="/men" class="relative px-1 hover:border-b-2 hover:border-black transition-all duration-200" active-class="border-b-2 border-black">Men</RouterLink>
              <transition name="fade">
                <div v-if="showMenMenu" class="fixed left-0 top-[120px] w-full h-[406px] bg-white border-t shadow-md mt-14 z-50">
                  <div class="max-w-6xl mx-auto py-8 px-12 grid grid-cols-3 gap-8">
                    <div>
                      <h3 class="text-xs uppercase font-mono font-semibold text-gray-500 mb-3">Highlights</h3>
                      <ul class="space-y-2 text-sm font-mono">
                        <li><RouterLink to="/listing" class="hover:underline">Shop All New Arrivals</RouterLink></li>
                        <li><RouterLink to="#" class="hover:underline">The Gift Guide</RouterLink></li>
                        <li><RouterLink to="#" class="hover:underline">New Bottoms</RouterLink></li>
                        <li><RouterLink to="#" class="hover:underline">New Tops</RouterLink></li>
                        <li><RouterLink to="#" class="hover:underline">T-Shirt Bundles</RouterLink></li>
                        <li><RouterLink to="#" class="hover:underline">Under $100</RouterLink></li>
                      </ul>
                    </div>
                    <div>
                      <h3 class="text-xs uppercase font-mono font-semibold text-gray-500 mb-3">Featured Shops</h3>
                      <ul class="space-y-2 text-sm font-mono">
                        <li><a href="#" class="hover:underline">The Holiday Outfit Edit</a></li>
                        <li><a href="#" class="hover:underline">Giftable Sweaters</a></li>
                        <li><a href="#" class="hover:underline">Uniform & Capsule</a></li>
                        <li><a href="#" class="hover:underline">The Performance Chino Shop</a></li>
                        <li><a href="#" class="hover:underline">Top Rated Men’s Clothing</a></li>
                      </ul>
                    </div>
                    <div class="flex space-x-4">
                      <div class="relative w-[262px] h-[262px]">
                        <img class="absolute w-full h-full object-cover mb-2 rounded-md" src="/src/assets/img/HeaderSection/Nav1.png" alt="Holiday Outfit">
                        <span class="absolute bottom-3 left-3 text-sm font-medium text-white">The Holiday <br> Outfit Edit</span>
                        <svg class="absolute bottom-3 right-3 text-white w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"> <path stroke-linecap="round" 
                        stroke-linejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" /></svg>  
                      </div>
                      <div class="relative w-[262px] h-[262px]">
                        <img class="absolute w-full h-full object-cover mb-2 rounded-md" src="/src/assets/img/HeaderSection/Nav2.png" alt="Giftable Sweaters">
                        <span class="absolute bottom-3 left-3 text-sm font-medium text-white">Giftable <br> Sweaters</span>
                        <svg class="absolute bottom-3 right-3 text-white w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"> <path stroke-linecap="round" 
                        stroke-linejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" /></svg>   
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
          </div>
          <RouterLink to="/about" class="relative px-1 hover:border-b-2 hover:border-black transition-all duration-200" active-class="border-b-2 border-black">About</RouterLink>
          <RouterLink to="/blog" class="relative px-1 hover:border-b-2 hover:border-black transition-all duration-200" active-class="border-b-2 border-black">Everworld Stories</RouterLink> 
        </nav>
        <h1 class="text-black font-bold text-2xl uppercase">Everlane</h1>
        <div class="flex items-center space-x-4 mr-16">
          <svg @click="showSearch = !showSearch" class="w-5 inline-block cursor-pointer hover:text-gray-500 transition" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <SearchBar 
          v-model:showSearch="showSearch" 
          v-model:searchQuery="searchQuery" 
          />
          <svg class="w-5 inline-block" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 20.1a7.5 7.5 0 0 1 15 0A17.9 17.9 0 0 1 12 21.75c-2.7 0-5.2-.6-7.5-1.65Z" />
          </svg>
          <svg @click="cartRef.toggleCart()" class="w-5 inline-block cursor-pointer hover:text-gray-500 transition" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.12-2.3 2.1-4.68 2.92-7.14a60.1 60.1 0 0 0-16.53-1.84M7.5 14.25 5.1 5.27M6 20.25a.75.75 0 1 1-1.5 0m14.25 0a.75.75 0 1 1-1.5 0" />
          </svg> 
          <CartSidebar ref="cartRef" />
        </div>
     </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import CartSidebar from "./CartSidebar.vue";
import SearchBar from "./SearchBar.vue";

const showSearch = ref(false)
const searchQuery = ref('')

const cartRef = ref(null);

const showMenMenu = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease; transform: 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.router-link-active,
.router-link-exact-active {
  transition: border-bottom 0.2s ease;
}
</style>