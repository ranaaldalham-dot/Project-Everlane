<template>
  <section> 
    <div class="text-center py-16 px-4">
      <h3 class="text-3xl mt-1">Everlane On You</h3>
      <p class="text-gray-600 text-sm mt-4">share your latest look with <span class="font-medium">#EverlaneOnYou </span> for a chance to be featured.</p>
      <a href="#" class="text-gray-600 underline">Add Your Photo</a>
    </div>
    <div class="py-10 px-4">
      <div class="container mx-auto relative flex justify-center items-center">
        <button class="absolute left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10 hidden sm:block"><!--navigation arrows-->
          <svg class="h-6 w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
        </button>
        <button class="absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10 hidden sm:block">
          <svg class="h-6 w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
        </button> 
        <div class="grid grid-flow-col gap-2 overflow-x-auto sm:grid-cols-5 sm:justify-items-center"> 
          <div class="relative w-48 sm:w-auto"> 
            <img class="w-48 h-48 object-cover" src="/src/assets/img/LandingPage/look1.png" alt="look1">
            <div class="absolute top-2 right-2 rounded-full bg-white p-1">
            <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114
                60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            </div>
          </div> 
          <div class="relative w-48 sm:w-auto"> 
            <img class="w-48 h-48 object-cover" src="/src/assets/img/LandingPage/look2.png" alt="look2">
            <div class="absolute top-2 right-2 rounded-full bg-white p-1">
              <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114
                  60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div> 
          <div class="relative w-48 sm:w-auto"> 
            <img class="w-48 h-48 object-cover" src="/src/assets/img/LandingPage/look3.png" alt="look3">
            <div class="absolute top-2 right-2 rounded-full bg-white p-1">
              <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114
                60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div> 
          <div class="relative w-48 sm:w-auto"> 
            <img class="w-48 h-48 object-cover" src="/src/assets/img/LandingPage/look4.png" alt="look4">
            <div class="absolute top-2 right-2 rounded-full bg-white p-1">
              <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
               <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114
                60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div> 
          <div class="relative w-48 sm:w-auto"> 
            <img class="w-48 h-48 object-cover" src="/src/assets/img/LandingPage/look5.png" alt="look5">
            <div class="absolute top-2 right-2 rounded-full bg-white p-1">
              <svg class="w-5 h-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114
                  60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </div>
       </div>
      </div>
    </div>  
  </section>
  <section>
    <div class="p-6 grid md:grid-cols-3 gap-10 mb-4 mt-4">
      <div class="flex flex-col items-center text-center">
        <img class="w-[78px] h-[78px] mb-4" src="/src/assets/img/LandingPage/shipping.png" alt="shipping">
        <p class="text-lg font-medium mb-2">Complimentary Shipping</p>
        <p class="text-sm text-gray-600 mb-4">Enjoy free shipping on U.S. orders over $100.</p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img class="w-[78px] h-[78px] mb-4" src="/src/assets/img/LandingPage/crafted.png" alt="crafted">
        <p class="text-lg font-medium mb-2">Consciously Crafted</p>
        <p class="text-sm text-gray-600 mb-4">Designed with you and the planet in mind.</p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img class="w-[78px] h-[78px] mb-4" src="/src/assets/img/LandingPage/location.png" alt="location">
        <p class="text-lg font-medium mb-2">Come Say Hi</p>
        <p class="text-sm text-gray-600 mb-4">We have 11 stores across the U.S.</p>
      </div>
    </div>
  </section>
</template>