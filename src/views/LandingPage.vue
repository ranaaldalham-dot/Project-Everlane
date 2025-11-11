<template>
  <div class="bg-slate-50">
    <Header />
    <LandingNav />
    <HeroSection />
    <FaveSection />
    <ReviewSection />
    <LooksSection />
    <Footer />
  </div>
</template>

<script setup>
  import Header from '../components/Header.vue'
  import LandingNav from '../components/LandingPage/LandingNav.vue'
  import HeroSection from  '../components/LandingPage/HeroSection.vue'
  import FaveSection from '../components/LandingPage/FaveSection.vue'
  import ReviewSection from '../components/LandingPage/ReviewSection.vue'
  import LooksSection from '../components/LandingPage/LooksSection.vue'
  import Footer from '../components/Footer.vue'
</script>