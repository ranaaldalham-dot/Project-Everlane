<template>   
    <section class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
      <div class="grid grid-cols-2 gap-4">
        <img src="/src/assets/img/ProductPage/jacket-1.png" alt="Product image" class="w-full aspect-[3/4] object-cover rounded-lg" />
        <img src="/src/assets/img/ProductPage/jacket-2.png" alt="Product image" class="w-full aspect-[3/4] object-cover rounded-lg" />
        <img src="/src/assets/img/ProductPage/jacket-3.png" alt="Product image" class="w-full aspect-[3/4] object-cover rounded-lg" />
        <img src="/src/assets/img/ProductPage/jacket-4.png" alt="Product image" class="w-full aspect-[3/4] object-cover rounded-lg" />
        <img src="/src/assets/img/ProductPage/jacket-5.png" alt="Product image" class="w-full aspect-[3/4] object-cover rounded-lg" />
        <img src="/src/assets/img/ProductPage/jacket-6.png" alt="Product image" class="w-full aspect-[3/4] object-cover rounded-lg" />
      </div>   
      <div class="flex flex-col justify-start">
            <div>
                <nav>
                    <ol class="flex space-x-1 text-xs text-gray-600 mb-2 lg:mb-0">
                        <li><a href="/" class="hover:underline">Men</a></li>
                        <li class="text-gray-400">/</li>
                        <li><a href="#" class="hover:underline">Outerwear - Jackets & Coats</a></li>
                    </ol>
                    <div class="flex flex-col gap-1">
                        <div class="justify-between">
                            <h1 class="text-2xl font-semibold leasing-sung tracking-tight mb-2">The ReWool® <br> Oversized Shirt Jacket</h1>
                            <div class="text-end">
                                <p class="inline-block text-gray-500 text-lg line-through mb-1 mr-2">$238</p>
                                <p class="inline-block text-lg font-medium text-black ">$167</p>
                            </div>   
                        </div>   
                    </div>  
                </nav>
            </div>        
            <div class="flex items-center gap-1 mb-2">
                <div class="flex mt-2 ml-2">
                    <template v-for="n in 5" :key="n">
                        <svg class="w-3 h-3 block" fill="black" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </template>
                    <p class="text-xs text-gray-600 ml-4">5.0 (2 Reviews)</p>
                </div>
            </div> 

            <div class="flex my-6 border-t border-gray-300"></div>

            <div class=" mb-4">
                <p class="text-sm font-medium mt-4 mb-1">Color Black / Olive</p>
                <div class="flex space-x-3">
                    <button v-for="(color, index) in colors" :key="index" @click="selectColor(index)" :class="['w-8 h-8 rounded-full border cursor-pointer transition duration-200',
                     color.class, selectedColor === index ? 'ring-2 ring-white shadow-sm' : '', 'hover:ring-2 hover:ring-gray-300']" :title="color.name">
                    </button>
                </div>
            </div>
            <div class="mb-4">
                <div class="flex justify-between items-center">
                    <p class="text-sm font-medium mb-1">Size</p>
                    <a href="#" class="text-xs underline">Size Guide</a>
                </div>
                <div class="flex flex-wrap gap-4 mt-2">
                    <button v-for="size in sizes" :key="size" @click="selectSize(size)" :class="['w-[45px] h-[40px] text-xs px-2 py-1 border rounded transition',  selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200']">
                        {{ size }}
                    </button>
                </div>
            </div>
            <button class="w-full py-3 mt-6 bg-black text-white uppercase tracking-wide rounded-md hover:bg-gray-800">add to bag</button>
            <ul class="mt-6 text-sm space-y-2 border-t-1 border-gray-300">
                <li class="flex items-start mt-4">
                    <div class="fas fa-truck-fast mr-4 flex-shrink-0 flex items-center justify-center">
                        <svg class="w-8 h-8 mr-4 text-gray-700" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />    
                        </svg>
                    </div>
                    <div class="text-sm leading-relaxed"> 
                        <span class="font-medium mr-1">Free Shipping</span> 
                        <span class="block">On all U.S. orders over $100
                        <a href="#" class="underline">Learn More</a></span>
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="fas fa-truck-fast mr-4 flex-shrink-0 flex items-center justify-center">
                        <svg  class="w-8 h-8 text-gray-700 mr-4" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                    </div>
                    <div class="text-sm leading-relaxed">
                        <span class="font-medium mr-1">Easy Returns</span> 
                        <span class="block"> returns through January 31.
                            <a href="#" class="underline">Returns Details</a>
                        </span>  
                    </div>
                </li>
                <li class="flex items-start">
                    <div class="fas fa-truck-fast mr-4 flex-shrink-0 flex items-center justify-center">
                        <svg  class="w-8 h-8 text-gray-700 mr-4" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                    </div>
                    <div class="text-sm leading-relaxed">
                        <span class="font-medium mr-1">Send it as a Gift</span>
                        <span class="block"> Add a free persomalized note during checkout.</span>
                    </div>
                </li>
            </ul>
            <div class="my-6 border-t border-gray-300" />
            <div class="mt-4">
                <h3 class="font-medium text-base mb-4">Part shirt, part jacket, all style.</h3>
                <p class="text-sm text-black leading-relaxed text-justify"> Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the 
                classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and 
                on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool 
                and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use 
                of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements 
                for third-party certification of recycled input in products—including chain of custody, social and environmental practices, 
                and chemical restrictions.
                </p>
            </div>
            <div class="mt-8 text-sm space-y-4">
                <div class="flex">
                    <p class="font-medium text-base text-black w-1/3">Model</p>
                    <p>Model is 6'2", wearing size M</p>
                </div>
                <div class="my-6 border-t border-gray-300" />
                <div class="flex">
                    <p class="font-medium text-base text-black w-1/3">Fit</p>
                    <p class="w-1/3">Questions about fit? <br> 
                        <a href="#">Contact Us</a> <br> 
                        <a href="#">Size Guide</a>
                    </p>
                </div>
            </div>
            <div class="my-6 border-t border-gray-300" />
            <div class="mt-2">
                <p class="font-medium text-base mb-2">Sustainability</p>
                <img class="w-full max-w-md h-auto" src="/src/assets/img/ProductPage/sustainability.png" alt="Recycled Materials" />
            </div>
            <div class="my-6 border-t border-gray-300" />
        </div>  
    </section>
    <section class="max-w-7xl mx-auto px-18 py-12">
        <h2 class="text-xl font-semibold mb-6">Recommended Products</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="product in recommended" :key="product.id" class="flex flex-col">
                 <img :src="product.image" :alt="product.name" class="w-full h-[392px] object-cover rounded-md mb-4" />
                 <div class="flex justify-between items-center mt-3">
                     <p class="text-sm font-medium mb-1">{{ product.name }}</p>
                     <div class="flex items-center gap-2">
                         <p v-if="product.oldPrice" class="text-gray-400 line-through text-sm">{{ product.oldPrice }}</p>
                         <p class="text-sm text-black">{{ product.price }}</p>
                     </div>  
                 </div>
                <p class="text-gray-500 text-sm mb-1"> {{ product.info }} </p> 
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const productId = route.params.id
console.log('Current Product ID:', productId)

const selectedSize = ref(null)
function selectSize(size) {
  selectedSize.value = selectedSize.value === size ? null : size
}

const selectedColor = ref(null)
function selectColor(index) {
  selectedColor.value = selectedColor.value === index ? null : index
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colors = [
  { name: 'Olive', class: 'bg-green-900' },
  { name: 'Black', class: 'bg-yellow-900' }
]

const images = import.meta.glob('/src/assets/img/ProductPage/*.png', { eager: true, import: 'default' }) 
const recommended = [
  { id: 1, name: "The Waffle Long-Sleeve Crew", price: "$50", oldPrice: "$60", info: "Bone", image: images ["/src/assets/img/ProductPage/recommended-1.png"] },
  { id: 2, name: "The Waffle Long-Sleeve Crew", price: "$50", oldPrice: "$60", info: "Bone", image: images ["/src/assets/img/ProductPage/recommended-2.png"] },
  { id: 3, name: "The Waffle Long-Sleeve Crew", price: "$50", oldPrice: "$60", info: "Bone", image: images ["/src/assets/img/ProductPage/recommended-3.png"] },
  { id: 4, name: "The Waffle Long-Sleeve Crew", price: "$50", oldPrice: "$60", info: "Bone", image: images ["/src/assets/img/ProductPage/recommended-4.png"] },
];
</script>

<style scoped>
button {
  transition: all 0.2s ease-in-out;
}
</style>