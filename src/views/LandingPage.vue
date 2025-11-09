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
  import LandingNav from '../components/LandingNav.vue'
  import HeroSection from  '../components/HeroSection.vue'
  import FaveSection from '../components/FaveSection.vue'
  import ReviewSection from '../components/ReviewSection.vue'
  import LooksSection from '../components/LooksSection.vue'
  import Footer from '../components/Footer.vue'
</script>