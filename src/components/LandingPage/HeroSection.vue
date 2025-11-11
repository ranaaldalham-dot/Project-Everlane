<template>
    <section class="relative mt-3.5">
        <img class="w-full mt-2" src="/src/assets/img/LandingPage/cozy-era.png" alt="cozy era">
        <div class="absolute items-center top-44 left-54">
            <h2 class="text-white font-mono text-4xl mb-2">Your Cozy Era</h2>
            <p class="text-white text-center text-lg mb-6">Get peak comfy-chic <br> with new winter essentials.</p>
            <div class="flex justify-center">
                <a href="#" class="bg-white text-black text-center text-[14px] uppercase w-[240px] h-[41px] rounded p-2">Shop Now</a>
            </div>
        </div>
    </section>
    <section> 
        <div>
          <h2 class="text-center text-[24px] mt-24 mb-4">Shope by Category</h2>
          <div class="mt-8 mb-6 grid lg:grid-cols-6 gap-10 justify-center pl-7 pr-7">
            <div class="text-center">
                <img src="/src/assets/img/LandingPage/shirts.png" alt="shirts">
                <RouterLink to="#" class="underline">shirts</RouterLink>
            </div>
            <div class="text-center">
                <img src="/src/assets//img/LandingPage/denim.png" alt="denim">
                <RouterLink to="#" class="underline">Denim</RouterLink>
            </div>
            <div class="text-center">
                <img src="/src/assets//img/LandingPage/tees.png" alt="tees">
                <RouterLink to="#" class="underline">Tees</RouterLink>
            </div>
            <div class="text-center">
                <img src="/src/assets//img/LandingPage/pants.png" alt="pants">
                <RouterLink to="#" class="underline">Pants</RouterLink>            </div>

            <div class="text-center">
                <img src="/src/assets//img/LandingPage/sweaters.png" alt="sweaters">
                <RouterLink to="#" class="underline">Sweaters</RouterLink>
            </div>
            <div class="text-center">
                <img src="/src/assets//img/LandingPage/outerwear.png" alt="outerwear">
                <RouterLink to="/product/:id" class="underline">Outerwear</RouterLink>
            </div>
          </div>
        </div>
    </section>
    <section>
        <div class="mt-20 mb-6 grid lg:grid-cols-3 gap-5 justify-center pl-7 pr-7">
            <section class="relative">
                <img src="/src/assets/img/LandingPage/new-ariivals.png" alt="New Arrivals">
                <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <span class="text-[16px]">New Arrivals</span>
                    <RouterLink to="/listing" class="btn bg-white p-2 w-[240px] h-[41px] text-black text-[14px] text-center uppercase">shope the latest</RouterLink>
                </div>
            </section>
            <section class="relative">
                <img src="/src/assets/img/LandingPage/best-sellers.png" alt="best sellers">
                <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <span class="text-[16px]">Best-Seller</span>
                    <RouterLink to="#" class="btn bg-white p-2 w-[240px] h-[41px] text-black text-[14px] text-center uppercase">shope by favorites</RouterLink>
                </div>
            </section>
            <section class="relative">
                <img src="/src/assets/img/LandingPage/hollday-outfit.png" alt="hollday outfit">
                <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <span class="text-[16px]">Hollday Outfit</span>
                    <RouterLink to="#" class="btn bg-white p-2 w-[240px] h-[41px] text-black text-[14px] text-center uppercase">occasion</RouterLink>
                </div>
            </section>
        </div>
    </section>
    <section>
        <div class="relative mt-14 mb-6">
            <img class="w-[1316px] h-[281px] justify-center pr-7 pl-7" src="/src/assets/img/LandingPage/mission.png" alt="mission">
            <div class="absolute inset-28 items-center justify-center top-16">
                <span class="block text-white font-mono text-[32px] text-center mb-2">We're on a Mission To Clean Up the Industry</span>
                <span class="block text-white font-mono text-[16px] text-center mb-4">Read about our progress in our latest Impact Report.</span>
                <div class="flex justify-self-center">
                    <a href="#" class="bt bg-white p-2 w-[240px] h-[41px] pt-2 pb-2 uppercase text-black text-[14px] text-center">learn more</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>