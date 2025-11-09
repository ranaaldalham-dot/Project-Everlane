<template>
  <div class="min-h-screen flex flex-col"> 
    <main class="flex-1">
      <router-view /> 
    </main>
  </div>  
</template>

<script setup>
import Header from '../components/Header.vue'
import SubNav from '../components/SubNav.vue'
import Footer from '../components/Footer.vue'
</script>