<template>
  <section> 
    <div class="py-16 px-4 md:px-0">
      <div class="container mx-auto max-w-6x1 relative">
        <button class="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"><!--navigation arrows-->
          <svg class="h-6 w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button class="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 z-10">
          <svg class="h-6 w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>  
        <div class="grid md:grid-cols-2 items-center gap-12">
          <div class="text-center md:text-left">
            <p class="text-xl font-bold text-gray-900 mt-6 mb-2 ml-16">People are Talking</p>
            <div class="flex mt-6 ml-16">
              <svg class="w-3 h-3 block" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>  
              <svg class="w-3 h-3 block" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg> 
              <svg class="w-3 h-3 block" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg> 
              <svg class="w-3 h-3 block" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg> 
              <svg class="w-3 h-3 block" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg> 
            </div>
            <blockquote class="text-2xl font-bold leading-relaxed text-black italic mt-2 mb-8 ml-16">
                "Love this shirt! Fits perfectly and <br> the fabric is thick without being stiff."
            </blockquote>
            <p class="text-sm text-gray-700 mb-6 ml-16">-- JonSnSF,<span class="underline">The Heavyweight Overshirt</span></p>  
          </div>
            <div class="flex justify-center md:justify-end mt-8 md:mt-0">
              <img class="w-full max-w-md h-auto object-cover rounded-lg mr-20" src="/src/assets/img/LandingPage/rate.png" alt="review">
            </div>
        </div>
          <div class="flex justify-center mt-10 sopace-x-3"> 
            <div class="w-2 h-2 mr-2 rounded-full bg-black" />
            <div class="w-2 h-2 mr-2 ml-2 rounded-full bg-gray-400" />
            <div class="w-2 h-2 mr-2 ml-2 rounded-full bg-gray-400" />
            <div class="w-2 h-2 mr-2 ml-2 rounded-full bg-gray-400" />
          </div>
      </div>
    </div>
  </section> 
  <hr class="my-4 border-t-2 ml-10 mr-10 mb-4 border-gray-400"/>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div class="ml-20">
        <h3 class="text-xl mb-4 text-gray-700 text-center">Our Holiday Gift Picks</h3>
        <img class="w-[505px] h-[626px]" src="/src/assets/img/LandingPage/hollday-gift.png" alt="Holiday Gift">
        <div class="text-center text-gray-700"> 
          <p class="mt-4 mb-8">The best presents for everyone on your list.</p>
          <a href="#" class=" mt-4 mb-14 justify-center underline">Read More</a>
        </div>
      </div>
      <div class="mr-20"> 
        <h3 class="text-xl mb-4 text-gray-700  text-center">Cleaner Fashion</h3>
        <img class="w-[505px] h-[626px]" src="/src/assets/img/LandingPage/cfashion.png" alt="cleaner fashion">
        <div class="text-center">
          <p class="mt-4 mb-8">See the sustainability efforts behind each of our products.</p>
          <a href="#" class="mt-4 mb-14 justify-center underline">Learn More</a>
        </div>
      </div>
    </div>
  </div>
  <hr class="my-6 border-t-2 ml-10 mr-10 mb-2 border-gray-400"/>
</template>