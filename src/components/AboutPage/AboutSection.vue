<template>
    <section>
      <div class="relative">
        <img class="w-full h-[691px] object-cover mt-" src="/src/assets/img/AboutPage/about1.png" alt="About Everlane" />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 class="text-4xl md:text-5xl font-semibold leading-tight mb-2">We believe <br> we can all <br> make <br> a difference.</h1>
          <p class="text-lg max-w-2xl font-light">Our way: Exceptional quality. <br> Ethical factories. Radical Transparency.</p>
        </div>
      </div>
    </section>
    <section class="bg-white px-6 py-12 md:px-16">
        <div class="w-[884px] h-[373px] mx-auto items-center p-7">  
          <p class="text-black text-lg md:text-3xl text-center font-normal leading-relaxed">At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s 
            why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories 
            with you—down to the true cost of every product we make. It’s a new way of doing things. <br> We call it Radical Transparency.</p>
      </div>
    </section>
    <section>  
      <div class="grid md:grid-cols-2 gap-10 items-center text-black bg-stone-300">
        <img class="w-[700px] h-[733px]" src="/src/assets/img/AboutPage/about2.png" alt="Everlane Factory"/>
        <div class="ml-5 mr-8">
          <span class="uppercase text-xs font-bold mb-2">Our Factories</span>
          <h2 class="text-3xl font-semibold mb-6">Our ethical approach.</h2>
          <p class="text-justify leading-relaxed font-mono">We spend months finding the best factories around the world—the same ones that 
            produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each
            factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A 
            score of 90 or above for every factory.</p>
        </div>
      </div>
    </section> 
    <section>
      <div class="relative">
        <img class="w-full h-[637px] object-cover" src="/src/assets/img/AboutPage/about3.png" alt="About Everlane">
      </div>
    </section>

    <section>  
      <div class="grid md:grid-cols-2 gap-10 items-center text-black bg-stone-300">
        <div class="ml-8 mr-5">
          <span class="uppercase text-xs font-bold mb-2">Our Quality</span>
          <h2 class="text-3xl font-semibold mb-6">Designed <br> to last.h.</h2>
          <p class="text-justify leading-relaxed font-mono">At Everlane, we’re not big on trends. We want you to wear our pieces for years, 
            even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A 
            cashmere sweaters, Italian shoes, and Peruvian Pima tees.</p>
        </div>
        <img class="w-full h-[552px]" src="/src/assets/img/AboutPage/about4.png" alt="everlane quality"/>
      </div>
    </section> 
    <section>
      <div class="relative">
        <img class="w-full h-[560px] object-cover" src="/src/assets/img/AboutPage/about5.png" alt="About Everlane">
      </div>
    </section>
    <section>  
      <div class="grid md:grid-cols-2 gap-10 items-center text-black bg-white">
        <img class="w-[700px] h-[660px] shadow-m" src="/src/assets/img/AboutPage/about6.png" alt="Prices"/>
        <div class="ml-5 mr-8">
          <span class="uppercase text-xs font-bold mb-2">Our Prices</span>
          <h2 class="text-3xl font-semibold  mb-6">Radically Transparent.</h2>
          <p class="leading-relaxed font-mono">We believe our customers have a right to know how much their clothes cost to make. 
            We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus 
            the traditional retail markup.</p>
        </div>
      </div>
    </section> 
    <section  class="bg-slate-50 py-20">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h3 class="text-3xl font-medium mb-6 text-black">More to Explore</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div>
            <img class="mx-auto mb-4 w-[320px] h-[195px] transition-transform duration-300 ease-in-out hover:scale-105" src="/src/assets/img/AboutPage/about7.png" alt="Products" />
            <RouterLink to="#" class="font-semibold text-gray-700 text-base hover:underline mb-2">Our Products</RouterLink>
          </div>
          <div>
           <img class="mx-auto mb-4 w-[320px] h-[195px] transition-transform duration-300 ease-in-out hover:scale-105" src="/src/assets/img/AboutPage/about8.png" alt="Stores"  />
           <RouterLink to="/stores" class="text-gray-700 font-semibold text-base hover:underline mb-2">Our Stores</RouterLink> 
          </div>
          <div>
            <img class="mx-auto mb-4 w-[320px] h-[195px] transition-transform duration-300 ease-in-out hover:scale-105" src="/src/assets/img/AboutPage/about9.png" alt="Careers"  />
            <RouterLink to="#" class="font-semibold text-gray-700 text-base hover:underline mb-2">Careers</RouterLink>
          </div>
        </div>
      </div>
    </section> 
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>