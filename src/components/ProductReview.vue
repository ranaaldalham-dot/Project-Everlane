<template>
  <section class="max-w-4xl mx-auto px-4 py-8 space-y-6">
    <h2 class="text-xl font-semibold text-center mb-6">Reviews</h2>
    <div class="border w-full h-[242px] border-gray-300 bg-gray-100 p-6">
      <div class="grid grid-cols-3 gap-6">
       
       <div class="flex flex-col items-start  mt-2 ml-2">
          <p class="text-base font-semibold mb-1">5.0 Overall Rating</p>
          <div class="flex gap-0.5 mt-2">
            <template v-for="n in 5" :key="n">
              <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </template>
          </div>
       </div>    
        <div class="mt-2 space-y-1">
          <div v-for="rating in ratings" :key="rating.value" class="flex items-center">
            <span class="text-sm text-gray-600">{{ rating.value }}</span>
            <template v-for="n in 1" :key="n">
              <svg class="inline-block w-4 h-4 ml-1" fill="black" viewBox="0 0 24 24">
               <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </template>
            <div class="flex-1 h-2 bg-gray-200 mx-2">
              <div v-if="rating.count > 0" class="h-full bg-gray-800" :style="{ width: '100%' }"></div>
            </div>
            <span class="text-sm text-gray-600">{{ rating.count }}</span>
          </div>
        </div>           
        <div class="flex flex-col mt-2 ml-2">
          <p class="block text-sm font-medium mb-2">Runs slightly large</p>
          <div class="flex gap-2 mt-2">
            <div class="h-2 w-12 bg-gray-300" />
            <div class="h-2 w-12 bg-gray-300" />
            <div class="h-2 w-12 bg-gray-300" />
            <div class="h-2 w-12 bg-black" />
            <div class="h-2 w-12 bg-gray-300" />
          </div>
          <div class="flex justify-between w-full mt-2 px-1">
            <span class="text-gray-600 text-xs">Run small</span>
            <span class="text-gray-600 text-xs">Run large</span>
          </div>
        </div>
      </div>
    </div>   
    <div class="flex justify-between items-center py-4 gap-4">  
      <button class="flex items-center justify-between border border-gray-400 px-4 py-3 w-40 h-16 rounded">
        <span class="text-lg font-bold text-black">Filter</span>
        <svg class="w-8 h-8" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
         <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
        </svg>
      </button>
      <div class="relative inline-block text-left">
        <div class="flex items-center justify-between border border-gray-400 px-4 py-3 rounded w-72 h-16 cursor-pointer" @click="toggleDropdown">
          <div>
            <span class="text-sm font-bold text-black block">Sort by:</span>
            <span class="text-sm text-gray-600 underline font-medium block">
              {{ selectedOption }}
            </span>
          </div>
          <svg class="w-4 h-4 transform transition-transform duration-200" :class="{ 'rotate-180': dropdownOpen }" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div v-if="dropdownOpen" class="absolute z-10 w-72 border border-gray-300 rounded shadow-lg">
          <ul class="py-2 text-sm text-gray-700">
            <li v-for="option in options" :key="option" @click="selectOption(option)" class="px-4 py-2 hover:bg-gray-100 hover:underline cursor-pointer">
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
    </div> 
    <div class="space-y-6 pt-8">
      <div v-for="(review, index) in reviews" :key="review.id" class="pt-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-semibold">{{ review.user }}</h3>
          <span class="text-xs text-gray-400">{{ review.date }}</span>
        </div>
        <div class="flex items-center gap-1 text-xs  mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
          <span class="text-gray-500">Verified</span>
        </div>    
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div class="text-sm text-black space-y-1 md:w-1/2">
            <div class="flex"><p class="font-semibold mr-2">Height:</p><span>{{ review.height }}</span></div>
            <div class="flex"><p class="font-semibold mr-2">Weight:</p><span>{{ review.weight }}</span></div>
            <div class="flex"><p class="font-semibold mr-2">Body Type:</p><span>{{ review.bodyType }}</span></div>
            <div class="flex"><p class="font-semibold mr-2">Size Purchased:</p><span>{{ review.sizePurchased }}</span></div>
            <div class="flex"><p class="font-semibold mr-2">Usual Size:</p><span>{{ review.usualSize }}</span></div>
          </div>
          <div class="space-y-2">
            <div class="flex gap-1">
              <template v-for="n in 5" :key="n">
                <svg class="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </template>
            </div>
            <p class="text-sm font-semibold">{{ review.commentTitle }}</p>
            <p class="text-sm font-mono">{{ review.comment }}</p>
          </div>
        </div>
        <div v-if="index !== reviews.length - 1" class="border-t border-gray-300 mt-6"></div>
      </div>
    </div>
  </section>

  <section class="max-w-5xl mx-auto px-18 py-12 text-center">
    <h2 class="text-2xl font-semibold mb-4">Transparent Pricing</h2>  
    <p class="text-base text-gray-500 font-mono leading-relaxed mb-12 max-w-3xl mx-auto">We publish what it costs us to make every one of our products. 
      There are a lot of costs we can't neatly account for - like design, fittings, wear testing, rent on office and 
      retail space - but we believe you deserve to know what goes into making the products you love.
    </p>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
      <div v-for="item in pricing" :key="item.label" class="flex flex-col items-center space-y-2">
        <img :src="item.icon" alt="icon" class="w-[58px] h-[59px] object-contain mb-2 transition-transform duration-300 ease-in-out hover:scale-110" />
        <p class="font-medium text-sm">{{ item.label }}</p>
        <p class="text-sm text-gray-600">{{ item.cost }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const dropdownOpen = ref(false)
const selectedOption = ref('Highest to Lowest Rating')
const options = ['Lowest to Highest Rating', 'All Rating']

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const selectOption = (option) => {
  selectedOption.value = option
  dropdownOpen.value = false
}

const ratings = [
  { value: 5, count: 2 },
  { value: 4, count: 0 },
  { value: 3, count: 0 },
  { value: 2, count: 0 },
  { value: 1, count: 0 }
]


const reviews = [
  {
    id: 1,
    user: 'Elizabeth88klyn',
    verified: true,
    date: '14 days ago',
    height: "5'6\" - 5'7\"",
    weight: '125 - 150 lbs',
    bodyType: 'Slim',
    sizePurchased: 'L',
    usualSize: 'L',
    commentTitle: 'Warm and very attractive on',
    comment:
      'Got this to keep my husband warm on those chilly late fall days. He loves it as it not only is pretty warm but he looks good in it and he knows it.',
  },
  {
    id: 2,
    user: 'Anonymous',
    verified: true,
    date: '14 days ago',
    height: "5'6\" - 5'7\"",
    weight: '175 - 200 lbs',
    bodyType: 'Stocky',
    sizePurchased: 'XL',
    usualSize: 'L',
    commentTitle: 'Super comfy',
    comment:
      'Great quality, warm and super comfy. Got the XL cuz I have a large back and it fits perfect. It does run a bit oversized which is good.',
  },
]

const images = import.meta.glob('/src/assets/img/ProductPage/*.png', { eager: true, import: 'default' }) 
const pricing = [
  { label: "Materials", cost: "$47.96", icon: images ["/src/assets/img/ProductPage/icon-1.png"] },
  { label: "Hardware", cost: "$3.74", icon: images ["/src/assets/img/ProductPage/icon-2.png"] },
  { label: "Labor", cost: "$19.75", icon: images ["/src/assets/img/ProductPage/icon-3.png"] },
  { label: "Duties", cost: "$8.09", icon: images ["/src/assets/img/ProductPage/icon-4.png"] },
  { label: "Transport", cost: "$1.63", icon: images ["/src/assets/img/ProductPage/icon-5.png"] },
];
</script>

<style scoped>
button {
  transition: all 0.2s ease-in-out;
}
</style>
