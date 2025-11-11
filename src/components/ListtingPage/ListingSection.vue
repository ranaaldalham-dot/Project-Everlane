<template>
  <main class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">
      <aside class="lg:col-span-1 space-y-6">
        <div>
          <h2 class="text-gray-500 text-xs">249 Products</h2>
        </div>
        <div>
          <div class="relative border-t border-gray-200 pt-6">
            <h2 class="text-sm font-medium text-gray-700 mb-4">Category</h2>
              <button @click="showCategory = !showCategory" class="absolute top-6 right-2 text-gray-500 hover:text-black">
                <svg :class="showCategory ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div v-if="showCategory" class="mt-2">
                <ul class="space-y-2 text-sm text-gray-700">
                  <li><label><input type="checkbox" class="mr-2"> Everyone - All Gender Collection</label></li>
                  <li><label><input type="checkbox" class="mr-2"> Accessories & Gift Cards</label></li>
                  <li><label><input type="checkbox" class="mr-2"> Backpacks, Weekenders & Duffels Bags</label></li>
                  <li><label><input type="checkbox" class="mr-2"> Dress Shirts & Button Downs</label></li>
                  <transition name="fade">
                    <li v-if="showMoreCategory">
                      <label><input type="checkbox" class="mr-2"> Hoodies & Sweatshirts</label>
                    </li>
                  </transition>
                  <li>
                    <button @click="showMoreCategory = !showMoreCategory" class="text-sm text-gray-700 hover:text-black cursor-pointer"> {{ showMoreCategory ? 'View Less -' : 'View More +' }} </button>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <div>
          <div class="relative border-t border-gray-200 p-6">
            <h2 class="text-sm font-semibold text-gray-900 mb-4">Color</h2>
            <button @click="showColor = !showColor" class="absolute top-6 right-2 text-gray-500 hover:text-black">
              <svg :class="showColor ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
              <div v-if="showColor" class="mt-2">
                <div class="grid grid-cols-3 gap-2 mb-2">
                  <div v-for="color in colors" :key="color.name" class="flex flex-col items-center space-y-1">
                    <button @click="selectSidebarColor(color.name)" :class="['w-6 h-6 rounded-full border cursor-pointer transition', color.class, selectedSidebarColor === color.name ? 'ring-2 ring-white shadow-sm' : '', 'hover:ring-2 hover:ring-gray-300']" :title="color.name"></button>
                    <span class="text-xs text-gray-700"> {{ color.name }} </span>
                  </div>
                </div>
                <transition name="fade">
                  <div v-if="showMoreColor" class="grid grid-cols-3 gap-2">
                    <div v-for="color in moreColors" :key="color.name" class="flex flex-col items-center space-y-1">
                      <button @click="selectSidebarColor(color.name)" :class="['w-6 h-6 rounded-full border cursor-pointer transition', color.class, selectedSidebarColor === color.name ? 'ring-2 ring-white shadow-sm' : '', 'hover:ring-2 hover:ring-gray-300']" :title="color.name"></button>
                      <span class="text-xs text-gray-700"> {{ color.name }} </span> 
                    </div>
                  </div>
                </transition>
                <button @click="showMoreColor = !showMoreColor" class="text-sm text-gray-700 hover:text-black cursor-pointer mt-2">
                  {{ showMoreColor ? 'View Less -' : 'View More +' }}
                </button>
              </div>
          </div>
        </div>  
        <div>
          <div class="relative border-t border-gray-200 p-6">
            <h2 class="text-sm font-semibold text-black mb-4">Size</h2>
            <button @click="showSize = !showSize" class="absolute top-6 right-2 text-gray-500 hover:text-black">
              <svg :class="showSize ? 'rotate-180' : ''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
              <div v-if="showSize">
                <div class="grid grid-cols-4 gap-2 mb-4">
                  <span class="col-span-4 text-gray-600 text-xs">Waiste</span>
                  <button  v-for="waist in sizes1" :key="waist" @click="selectWaist(waist)" :class="['text-xs px-2 py-1 rounded transition', selectedWaistSize === waist ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200']">
                    {{ waist }}
                  </button>
                </div>     
                <div class="grid grid-cols-4 gap-2">
                    <span class="col-span-4 text-gray-600 text-xs">Clothing</span>
                    <button v-for="clothes in sizes2" :key="clothes" @click="selectClothing(clothes)" :class="['text-xs px-2 py-1 rounded', selectedClothingSize === clothes ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200']">
                        {{ clothes }}
                    </button>
                </div>
              </div>
          </div>
        </div>
      </aside>
      <section class="lg:col-span-3">
        <nav class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <ol class="flex space-x-1 text-xs text-gray-400 mb-2 lg:mb-0">
              <li><a href="/" class="hover:underline">Home</a></li>
              <li class="text-gray-400">/</li>
              <li><a href="/men" class="hover:underline">Men</a></li>
            </ol>
            <h1 class="text-2xl font-semibold tracking-tight leading-snug">Men’s Clothing & Apparel - New Arrivals</h1>
            <p class="mt-2 text-gray-800 font-medium text-sm lg:mt-0">Featured</p>
          </div>
        </nav> 
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(product, index) in products" :key="product.id" class="group">          
            <RouterLink v-if="product.id === 6" :to="`/product/${product.id}`" class="relative block">
              <img :src="product.image" :alt="product.name" class="w-full aspect-[3/4] object-cover rounded">
              <span v-if="product.discount" class="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded">
                {{ product.discount }}% off
              </span>
            </RouterLink>               
            <div v-else class="relative block">
              <img :src="product.image" :alt="product.name" class="w-full aspect-[3/4] object-cover rounded" />
              <span v-if="product.discount" class="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded">
                {{ product.discount }}% off
              </span>
            </div>
            <div class="flex justify-between items-center mt-3">
              <h3 class="text-sm text-gray-900 font-medium"> {{ product.name }} </h3>
              <div class="flex items-center gap-2">
                <p v-if="product.oldPrice" class="text-gray-400 line-through text-xs">${{ product.oldPrice }}</p>
                <p class="text-gray-900 font-medium text-xs">${{ product.price }}</p>
              </div>
            </div>
            <p class="text-gray-500 text-sm"> {{ product.color }} </p>                   
            <div class="flex gap-2 mt-2">
              <span v-for="(swatch, swatchIndex) in product.swatches" :key="swatch.name" @click="selectSwatch(index, swatchIndex)" :class="['w-5 h-5 rounded-full border cursor-pointer transition duration-200',
                swatch.class, product.selectedSwatch === swatchIndex ? 'ring-2 ring-black shadow-sm' : '', 'hover:ring-2 hover:ring-gray-300']" :title="swatch.name">
              </span>
            </div>                      
            <div class="flex gap-2 mt-2">
              <span v-for="tag in product.tags" :key="tag" class="text-[10px] border border-gray-300 rounded px-1.5 py-0.5 text-gray-600">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const showCategory = ref(true)
const showColor = ref(true)
const showSize = ref(true)
const showMoreCategory = ref(false)
const showMoreColor = ref(false)
const selectedWaistSize = ref(null)
const selectedClothingSize = ref(null)

function selectWaist(size) {
  selectedWaistSize.value = selectedWaistSize.value === size ? null : size
}

function selectClothing(size) {
  selectedClothingSize.value = selectedClothingSize.value === size ? null : size
}

const selectedSidebarColor = ref(null)

function selectSidebarColor(colorName) {
  selectedSidebarColor.value = selectedSidebarColor.value === colorName ? null : colorName
}

function selectSwatch(productIndex, swatchIndex) {
  const product = products[productIndex]
  product.selectedSwatch = product.selectedSwatch === swatchIndex ? null : swatchIndex

}


const colors = [
  { name: 'Black', class: 'bg-black' },
  { name: 'Blue', class: 'bg-blue-600' },
  { name: 'Brown', class: 'bg-amber-800' },
  { name: 'Green', class: 'bg-green-800' },
  { name: 'Grey', class: 'bg-gray-400' },
  { name: 'Orange', class: 'bg-orange-500' },
  { name: 'Pink', class: 'bg-pink-300' },
  { name: 'Red', class: 'bg-red-500' },
  { name: 'Tan', class: 'bg-yellow-700' },
]

const moreColors = [
  { name: 'White', class: 'bg-white' },
  { name: 'Indigo', class: 'bg-indigo-500' },
  { name: 'Purple', class: 'bg-purple-500' },    
]

const sizes1 = ['36', '38', '40', '42', '44', '46', '48', '50']

const sizes2 = [ 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

const images = import.meta.glob('/src/assets/img/ListingPage/*.png', { eager: true, import: 'default' }) 
const products = reactive( [
{
    id: 1,
    name: 'The Cloud Relaxed Cardigan',
    color: 'Black',
    price: 132,
    oldPrice: 188,
    discount: 30,
    image: images ['/src/assets/img/ListingPage/product1.png'],
    swatches: [
      { name: 'Brown', class: 'bg-yellow-950' }, 
      { name: 'Grey', class: 'bg-gray-700' },
      { name: 'Tan', class: 'bg-yellow-800' },
      { name: 'Black', class: 'bg-black' },
    ],
    selectedSwatch: 0, 
},
{
    id: 2,
    name: 'The Organic Cotton Long-Sleeve Turtleneck',
    color: 'Black',
    price: 35,
    oldPrice: 50,
    discount: 30,
    tags: ['ORGANIC COTTON'],
    image: images ['/src/assets/img/ListingPage/product2.png'],
    swatches: [
      { name: 'Brown', class: 'bg-yellow-950' },
      { name: 'Black', class: 'bg-black' },
      { name: 'Dark Gray', class: 'bg-gray-950' },
    ],
    selectedSwatch: 0, 
},
{
    id: 3,
    name: 'The Wool Flannel Pant',
    color: 'Heather Charcoal',
    price: 97,
    oldPrice: 138,
    discount: 30,
    tags: ['RENEWED MATERIALS', 'CLEANER CHEMISTRY'],
    image: images ['/src/assets/img/ListingPage/product3.png'],
    swatches: [
      { name: 'Grey', class: 'bg-zinc-800' },
      { name: 'Green', class: 'bg-lime-900' },
    ],
    selectedSwatch: 0, 
},
{
    id: 4,
    name: 'The Cloud Relaxed Cardigan',
    color: 'Black',
    price: 132,
    oldPrice: 188,
    discount: 30,
    image: images ['/src/assets/img/ListingPage/product4.png'],
    swatches: [
      { name: 'Brown', class: 'bg-yellow-950' }, 
      { name: 'Grey', class: 'bg-gray-700' },
      { name: 'Tan', class: 'bg-yellow-800' },
      { name: 'Black', class: 'bg-black' },
    ],
    selectedSwatch: 0, 
},
{
    id: 5,
    name: 'The Organic Cotton Long-Sleeve Turtleneck',
    color: 'Black',
    price: 35,
    oldPrice: 50,
    discount: 30,
    tags: ['ORGANIC COTTON'],
    image: images ['/src/assets/img/ListingPage/product5.png'],
    swatches: [
      { name: 'Brown', class: 'bg-yellow-950' },
      { name: 'Black', class: 'bg-black' },
      { name: 'Dark Gray', class: 'bg-gray-950' },
    ],
    selectedSwatch: 0, 
},
{
    id: 6,
    name: 'The Wool Flannel Pant',
    color: 'Heather Charcoal',
    price: 97,
    oldPrice: 138,
    discount: 30,
    tags: ['RENEWED MATERIALS', 'CLEANER CHEMISTRY'],
    image: images ['/src/assets/img/ListingPage/product6.png'],
    swatches: [
      { name: 'Grey', class: 'bg-zinc-800' },
      { name: 'Green', class: 'bg-lime-900' },
    ],
    selectedSwatch: 0, 
},
{
    id: 7,
    name: 'The Cloud Relaxed Cardigan',
    color: 'Black',
    price: 132,
    oldPrice: 188,
    discount: 30,
    image: images ['/src/assets/img/ListingPage/product7.png'],
    swatches: [
      { name: 'Brown', class: 'bg-yellow-950' }, 
      { name: 'Grey', class: 'bg-gray-700' },
      { name: 'Tan', class: 'bg-yellow-800' },
      { name: 'Black', class: 'bg-black' },
    ],
    selectedSwatch: 0, 
},
{
    id: 8,
    name: 'The Organic Cotton Long-Sleeve Turtleneck',
    color: 'Black',
    price: 35,
    oldPrice: 50,
    discount: 30,
    tags: ['ORGANIC COTTON'],
    image: images ['/src/assets/img/ListingPage/product8.png'],
    swatches: [
      { name: 'Brown', class: 'bg-yellow-950' },
      { name: 'Black', class: 'bg-black' },
      { name: 'Dark Gray', class: 'bg-gray-950' },
    ],
    selectedSwatch: 0, 
},
{
    id: 9,
    name: 'The Wool Flannel Pant',
    color: 'Heather Charcoal',
    price: 97,
    oldPrice: 138,
    discount: 30,
    tags: ['RENEWED MATERIALS', 'CLEANER CHEMISTRY'],
    image: images ['/src/assets/img/ListingPage/product9.png'],
    swatches: [
      { name: 'Grey', class: 'bg-zinc-800' },
      { name: 'Green', class: 'bg-lime-900' },
    ],
    selectedSwatch: 0, 
},  
])
</script>

<style scoped>
input[type='checkbox'] {
  accent-color: black;
}

.transition {
  transition: all 0.2s ease-in-out;
}
<<<<<<< HEAD
</style>
=======
>>>>>>> 84eaaf4 (Reorganized component folders by page:)
