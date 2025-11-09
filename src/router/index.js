import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '/src/views/LandingPage.vue'
import About from '/src/views/About.vue'
import Stores from '/src/views/Stores.vue'
import Blog from '/src/views/Blog.vue'
import BlogPost from '/src/views/BlogPost.vue'
import Listing from '/src/views/Listing.vue'
import ProductDetails from '/src/views/ProductDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: LandingPage},
  { path: '/men', name: 'LandingPage', component: LandingPage},
  { path: '/about', name: 'About', component: About},
  { path: '/stores', name: 'Stores', component: Stores},
  { path: '/blog', name: 'Blog', component: Blog},
  { path: '/blogpost/:id', name: 'BlogPost', component: BlogPost, props: true,},
  { path: '/listing', name: 'Listing', component: Listing},
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true,},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
