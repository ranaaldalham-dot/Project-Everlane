<template>
  <section> 
    <div>
      <div class="text-center mb-12"> 
        <h3 class="text-[24px] mt-9 mb-2">Everlane Favorites</h3>
        <p class="text-[16px] mt-1 mb-4">Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
      </div>
      <div class="relative"> 
        <button class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full shadow-lg z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg> 
        </button>
          <div class="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"> 
            <div class="flex-shrink-0 w-64 md:w-80">
              <a href="#" class="block">
                <img class="w-full h-auto object-cover rounded-md ml-2.5" src="/src/assets/img/LandingPage/long-sleeve.png" alt="long sleeve">
                  <div class="mt-4">
                    <p class="text-sm ml-2">The Waffle Long-Sleeve Crew 
                    <span class="justify-end text-sm ml-24">$60</span></p>
                    <p class="text-gray-600 font-light ml-2 mt-5">Bone</p>
                  </div>
              </a>
            </div>
            <div class="flex-shrink-0 w-64 md:w-80">
              <a href="#" class="block">
                <img class="w-full h-auto object-cover rounded-md" src="/src/assets/img/LandingPage/jacket.png" alt="jacket uniform">
                <div class="mt-4">
                  <p class="text-sm">The Bomber Jacket | Uniform <span class="justify-items-end text-sm ml-24">$148</span></p>
                  <p class="text-gray-600 font-light mt-5">Toasted Coconut</p>
                </div>
              </a>
            </div>
            <div class="flex-shrink-0 w-64 md:w-80">
              <a href="#" class="block">
                <img class="w-full h-auto object-cover rounded-md" src="/src/assets/img/LandingPage/uniform.png" alt="uniform">
                <div class="mt-4">
                  <p class="text-sm">The Slim 4-Way Stretch Organic Jean|<span class="justify-end text-sm ml-16">$96</span> Uniform</p>
                  <p class="text-gray-600 font-light">Dark Indigo</p>
                </div>
              </a>
            </div>
            <div class="flex-shrink-0 w-64 md:w-80">
              <a href="#" class="block">
                <img class="w-full h-auto object-cover rounded-md" src="/src/assets/img/LandingPage/organic.png" alt="organic">
                  <div class="mt-4">
                    <p class="text-sm">The Essential Organic Crew <span class="justify-end text-sm ml-28">$30</span></p>
                    <p class="text-gray-600 font-light mt-5">vintage Black</p>
                  </div>
              </a>
            </div>
            <div class="flex-shrink-0 w-64 md:w-80">
              <a href="#" class="block">
                <img class="w-full h-auto object-cover rounded-md" src="/src/assets/img/LandingPage/heavyweight.png" alt="heavyweight">
                  <div class="mt-4">
                    <p class="text-sm">The Heavyweight <span class="justify-end text-sm ml-44">$60</span></p> 
                    <p class="text-gray-600 font-light mt-5 mb-8">Heathered Brown</p>
                  </div>
              </a>
            </div>
          </div> 
        <button class=" bt absolute top-1/2 right-0-0 transform -translate-y-1/2 p-2 rounded-full shadow-lg z-10 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg> 
        </button>
      </div>
      <div class="flex justify-center mt-9 mb-20 sopace-x-3"> 
        <div class="w-2 h-2 mr-2 rounded-full bg-black"></div>
        <div class="w-2 h-2 mr-2 ml-2 rounded-full bg-gray-400"></div>
        <div class="w-2 h-2 mr-2 ml-2 rounded-full bg-gray-400"></div>
        <div class="w-2 h-2 mr-2 ml-2 rounded-full bg-gray-400"></div>
      </div>
    </div>
  </section>
</template>