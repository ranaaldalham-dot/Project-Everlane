<template>
  <div class="bg-slate-50">
    <Header />
    <SubNav />
    <ProductSection />
    <ProductReview />
    <Footer />
  </div>
</template>
    
<script setup>
import Header from '../components/Header.vue'
import SubNav from '../components/SubNav.vue'
import ProductSection from '../components/ProductDetailsPage/ProductSection.vue'
import ProductReview from '../components/ProductDetailsPage/ProductReview.vue'
import Footer from '../components/Footer.vue'
</script>