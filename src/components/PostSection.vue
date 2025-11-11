<template>
  
  <section class="relative">
        <!-- <div img class="hero w-full h-[600px] bg-cover bg-center flex items-center text-white" style="background-image: url('/src/assets/img/PostPage/winter-whites-post.png')"> -->
    <div> 
      <img class="hero w-full h-[600px] bg-cover bg-center flex items-center text-white" src="/src/assets/img/PostPage/winter-whites-post.png" alt="winter whites post" />
      <div class=" justify-start space-y-3 px-10 py-4">
        <span class="text-sm tracking-wide border border-white rounded-full px-5 py-1 ">Style</span>
        <h1 class="text-3xl md:text-5xl font-semibold leading-tight"> Style <br> How To Style Winter <br /> Whites</h1>
        <p class="text-sm md:text-base max-w-md mx-auto font-light">  Redefine your winter wardrobe with the timeless elegance of winter whites with this style guide.</p>
      </div>
    </div>  
  </section>
 
  <section class="max-w-4xl mx-auto px-4 mt-12 border-t-8 border-black pt-10">
    <div class="flex items-start gap-4 mb-6">
      <div class="flex gap-1 pt-1">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-blue-500 transition-colors duration-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-blue-700 transition-colors duration-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg></a>
      </div>
      <p class="text-4xl md:text-lg font-bold text-align leading-relaxed ml-8 mr-8">In a season dominated by dark hues, redefine your winter wardrobe with the timeless elegance of winter whites.
        Whether top-to-toe white outfits, tonal mixing-and-matching, or a key white piece (or two), give your style a
        breath of fresh air with this list of winter white closet essentials.</p>
    </div>
  </section>

  <section class="flex justify-center py-16">
    <img class="w-[350px] md:w-[600px] object-cover" src="/src/assets/img/PostPage/winter-white-look1.png"  alt="Winter White Look 1" />
  </section>

  <section class="max-w-4xl mx-auto px-4 space-y-10">
    <div v-for="tip in tips1" :key="tip.title">
      <h2 class="text-lg md:text-xl font-semibold mb-3">{{ tip.title }}</h2>
      <p class="text-black leading-relaxed space-y-4" v-html="tip.description"></p>
    </div>
  </section>

  <section class="flex justify-center py-16">
    <img class="w-[350px] md:w-[600px] object-cover" src="/src/assets/img/PostPage/winter-white-look2.png" alt="Winter White Look 2"  />
  </section>

  <section class="max-w-4xl mx-auto px-4 space-y-10">
    <div v-for="tip in tips2" :key="tip.title">
      <h2 class="text-lg md:text-xl font-semibold mb-3">{{ tip.title }}</h2>
      <p class="text-black leading-relaxed space-y-4" v-html="tip.description"></p>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-4 py-16 relative">
    <h2 class="text-2xl text-center font-semibold mb-10">The White Whites Edit</h2>

      <div class="relative">
        <button class="absolute left-0 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full shadow hover:bg-gray-100 z-10 hidden sm:block">
          <svg class="h-6 w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
        </button>            
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6 px-8">
          <div v-for="item in items" :key="item.id">
            <img :src="item.image" class="w-full h-72 object-cover" />
            <div class="flex justify-between mt-2 text-xs font-medium">
              <p>{{ item.name }}</p>
              <span>{{ item.price }}</span>
            </div>
            <p class="text-sm text-gray-500">{{ item.link }}</p>
          </div>       
        </div>           
        <button class="absolute right-0 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full shadow hover:bg-gray-100 z-10 hidden sm:block">
          <svg class="h-6 w-6" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div class="flex justify-center mt-14">
        <button class="bg-black text-white px-16 py-4 rounded hover:bg-gray-800 transition">Shop Now</button>
      </div>
  </section>

  <section class="w-full py-14">
    <div class="flex flex-col md:flex-row justify-between  gap-10 max-w-[1600px] mx-auto px-0">

      <div class="w-full md:w-[33%] flex flex-col items-start text-left">
        <img :src="latestPosts[0].image" :alt="latestPosts[0].title" class="rounded-lg w-full h-[400px] object-cover" />
        <h3 class="text-lg font-semibold mt-4 mb-3 leading-tight">{{ latestPosts[0].title }}</h3>
        <span class="border text-sm text-black rounded-full px-4 py-1 hover:bg-gray-800 hover:text-white transition">{{ latestPosts[2].category }}</span>
      </div>

      <div class="w-full md:w-[33%] flex flex-col items-start text-left">
        <img :src="latestPosts[1].image" :alt="latestPosts[1].title" class="rounded-lg w-full h-[400px] object-cover" />
        <h3 class="text-lg  font-semibold mt-4 mb-3 leading-tight">{{ latestPosts[1].title }}</h3>
        <span class="border text-sm text-black rounded-full px-4 py-1 hover:bg-gray-800 hover:text-white transition">{{ latestPosts[1].category }}</span>
      </div>

      <div class="w-full md:w-[33%] flex flex-col items-start text-left">
        <img :src="latestPosts[2].image" :alt="latestPosts[2].title" class="rounded-lg w-full h-[400px] object-cover" />
        <h3 class="text-lg font-semibold mt-4 mb-3 leading-tight">{{ latestPosts[2].title }}</h3>
        <span class="border text-sm text-black rounded-full px-4 py-1 hover:bg-gray-800 hover:text-white transition">{{ latestPosts[0].category }}</span>
      </div>

    </div>    
  </section>

</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = route.params.id
console.log('Post ID:', postId)

const tips1 = [
  {
    title: 'Nail the Classics',
    description:
      'Do pure winter chic with a <u>classic cashmere white sweater</u>. Made in the softest cashmere, it’s a sweater that will last season after season. Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make <u>sure you keep it clean and stain free</u>, to maintain that clean, polished look. Pair it with dark jeans or utility barrel pants for a casual yet refined ensemble, or layer it over a collared shirt for a preppy touch.',
  },
  {
    title: 'Monochromatic Magic',
    description:
      'Nothing feels more luxe than an all-white winter outfit. And the best part? You don’t have to break the bank to create a super chic top-to-toe look. Pair classic <u>corduroy pants</u> in a modern wide-legged silhouette with a relaxed <u>Oxford style white shirt</u> for a mix-and-match texture play. <p>Extra points if you add a <u>white blazer<u/>, <u>cardigan</u>, or <u>sweater</u>. Accessorize with subtle metallic accents or a bold red lip for a pop of color, letting your outfit take center stage.</p>',
  },
  {
    title: 'Keep Warm in White',
    description:
      'Stay warm all winter long with a <u>white puffer jacket</u>. This durable, cold-weather jacket is puffed-up for extra warmth, giving an on-point blown-out silhouette. A white coat not only stands out against the sea of dark winter jackets but also provides a fun canvas for experimenting with textures and patterns. Throw on a white coat over a neutral-toned outfit for an easy elegant look.',
  },
]

const tips2 = [
  {
    title: 'Textures and Layers',
    description:
      'Winter fashion is all about layering, and white outfits provide the perfect base for playing with textures and layers. Start with your <u>white turtleneck</u> and experiment with different fabrics like wool, cashmere, and silk to add depth and interest to your look. A <u>white silk blouse</u> layered under a chunky knit sweater or a white wool skirt paired with a <u>turtleneck</u> creates a textural look that’s both cozy and chic.',
  },
  {
    title: 'Accessorize with Neutrals',
    description: `
    <p>When working with a predominantly white palette, <u>neutrals become your best friends</u>. From <u>white leather Chelsea boots</u> to <u>off-white beanies</u>, mix in plenty of winter-ready accessories and shoes for those finishing touches.</p>
    <p>So, step into the season with confidence, and let your winter whites make a bold and beautiful statement. Shop our <u>winter white edit here</u>.</p>
  `,
  }
]

const images = import.meta.glob('/src/assets/img/PostPage/*.png', { eager: true, import: 'default' }) 
const items = [
  { id: 1, name: 'The Cashmere Boxy Crew Sweater', price: '$139', link: 'Bone', image: images ['/src/assets/img/PostPage/edit1.png'] },
  { id: 2, name: 'The Corduroy Wide-Leg Pant', price: '$69', link: 'Canvas', image: images ['/src/assets/img/PostPage/edit2.png'] },
  { id: 3, name: 'The Organic Cotton Chunky Beanie', price: '$32', link: 'Canvas', image: images ['/src/assets/img/PostPage/edit3.png'] },
  { id: 4, name: 'The Chelsea Boot', price: '$137', link: 'Off-White', image: images ['/src/assets/img/PostPage/edit4.png'] },
  { id: 5, name: 'The Re:Down@Puffer', price: '$139', link: 'Bone', image: images ['/src/assets/img/PostPage/edit5.png'] },
]

const latestPosts = [
  {
    id: 1,
    image: images ['/src/assets/img/PostPage/winter-whites-latest-post.png'],
    title: 'How To Style Winter Whites',
    category: 'Style',
  },
  {
    id: 2,
    image: images ['/src/assets/img/PostPage/glossy-award-latest-post.png'],
    title: 'We Won A Glossy Award',
    category: 'Transparency',
  },
  {
    id:3,
    image: images ['/src/assets/img/PostPage/matching-outfits-latest-post.png'],
    title: 'Coordinate Your Style: Matching Outfits for Everyone',
    category: 'Style',
  },
]
</script>

<style scoped>
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.02);
}
</style>
