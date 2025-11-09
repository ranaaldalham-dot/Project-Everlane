<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/65 bg-opacity-50 z-40" @click="closeCart"></div>
  <aside class="fixed top-0 right-0 w-full sm:w-[477px] h-screen bg-white z-50 transform transition-transform duration-300 border-l border-gray-200 flex flex-col" :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
    <div class="flex justify-end px-6 py-2 flex-shrink-0">  
      <button @click="closeCart" class="text-gray-500 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex-1 overflow-y-auto px-8 pb-4">
      <h2 class="text-lg font-semibold tracking-tight">Your Cart</h2>
      <div v-for="item in cartItems" :key="item.id" class="relative flex py-2">
        <img :src="item.image" alt="Product" class="w-[64px] h-[96px] object-cover rounded-sm" /> 
        <div class="flex-1 ml-4">
          <h3 class="text-sm font-medium text-gray-900 leading-tight">
            {{ item.name }}
          </h3>
          <p class="text-xs text-gray-500 mt-0.5">
            {{ item.size }} | {{ item.color }}
          </p>
          <div class="mt-3 flex items-center space-x-1">
            <span class="text-xs line-through text-gray-400">{{ item.oldPrice }}</span>
            <span class="text-xs font-medium text-gray-900">{{ item.price }}</span>
          </div>
          <span class="text-xs text-red-500 font-semibold">({{ item.discount }} off)</span>
        </div>
        <div class="flex flex-col items-end justify-between">
          <button @click="removeItem(item.id)" class="text-gray-400 hover:text-black">
            <svg class="w-4 h-4" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"  />
            </svg>
          </button>
          <div class="flex items-center space-x-3 border border-gray-300 rounded px-2 py-1">
            <button @click="decreaseQty(item)" class="text-xs font-medium">−</button>
            <span class="text-xs font-medium">{{ item.qty }}</span>
            <button @click="increaseQty(item)" class="text-xs font-medium">+</button>
          </div>
        </div>
      </div>
      <div class="mt-2 space-y-8">
        <h3 class="text-sm font-semibold mb-3">Before You Go</h3>
        <div class="flex items-center border border-gray-200 rounded p-3 hover:border-black transition">
          <img :src="beanieImage" alt="Beanie" class="w-[64px] h-[96px] object-cover rounded-sm"  />
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium">The Good Merino Wool Beanie</p>
            <p class="text-xs text-gray-500 mb-4">One Size | Chambray Blue</p>
            <p class="text-sm font-semibold mt-3">$35</p>
          </div>
          <button class="bg-black text-white text-xs uppercase px-5 py-2 hover:bg-gray-800 rounded mt-14">add</button>
        </div>
        <div class="flex justify-start space-x-2 mb-4">
          <div class="w-1.5 h-1.5 rounded-full bg-black"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
    <div class="shadow-[0_-5px_10px_rgba(0,0,0,0.1)] px-6 py-6 bg-white flex-shrink-0 border-t border-gray-200">
      <div class="flex justify-between text-sm mb-4">
        <span class="font-bold">Subtotal 
          <span class="font-normal">({{ totalItems }} items)</span>
        </span>
        <span class="font-bold">${{ subtotal }}</span>
      </div>
      <button class="w-full bg-black text-white py-3 text-sm font-medium uppercase hover:bg-gray-900 hover:text-gray-300 mt-4">
        Continue to Checkout
      </button>
      <p class="text-xs text-gray-800 text-center font-bold mt-6"> Psst, get it now before it sells out.</p>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from "vue";
import beanieImage from "@/assets/img/CartSideBar/beanie.png";
import cartItem1Image from "@/assets/img/CartSideBar/cart-item1.png";
import cartItem2Image from "@/assets/img/CartSideBar/cart-item2.png";

const isOpen = ref(false);

const cartItems = ref([
  {
    id: 1,
    name: "The Organic Cotton Long-Sleeve Turtleneck",
    size: "Medium",
    color: "Black",
    image: cartItem1Image,
    oldPrice: "$50",
    price: "$35",
    discount: "30%",
    qty: 1,
  },
  {
    id: 2,
    name: "The ReWool® Oversized Shirt Jacket",
    size: "Small",
    color: "Black",
    image: cartItem2Image,
    oldPrice: "$238",
    price: "$167",
    discount: "30%",
    qty: 1,
  },
]);

const subtotal = computed(() =>
  cartItems.value.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.qty,
    0
  )
);

const totalItems = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.qty, 0)
);

function toggleCart() {
  isOpen.value = !isOpen.value;
}

function closeCart() {
  isOpen.value = false;
}

function increaseQty(item) {
  item.qty++;
}

function decreaseQty(item) {
  if (item.qty > 1) item.qty--;
}

function removeItem(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
}

defineExpose({ toggleCart });
</script>