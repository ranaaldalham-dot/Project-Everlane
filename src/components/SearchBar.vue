<template>
    <transition name="fade">
        <div v-if="props.showSearch" class="absolute left-0 top-full w-full bg-white border-t shadow-md mt-14 z-50">
            <div class="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
                <input :value="props.searchQuery" @input="emit('update:searchQuery', $event.target.value)" type="text" placeholder="Search here" class="flex-1 bg-gray-100 py-3 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-500 text-sm" />
                <button @click="toggleSearch" class="text-gray-400 hover:underline text-sm font-medium bg-white">Cancel</button>
            </div>    
            <div class="max-w-6xl mx-auto px-6 pb-10">
                <h3 class="text-sm tracking-wide text-gray-800 mb-4">Popular Categories</h3>
                <div class="grid grid-cols-4 gap-6">
                    <div>
                        <img class="rounded-md w-full h-[340px] object-cover" src="@/assets/img/SearchBar/search1.png" alt="Women Sweaters">
                        <a href="#" class="block mt-2 text-sm text-gray-700 font-semibold underline">Women's Sweaters</a>
                    </div>
                    <div>
                        <img class="rounded-md w-full h-[340px] object-cover" src="@/assets/img/SearchBar/search2.png" alt="Women Bottom">
                        <a href="#" class="block mt-2 text-sm text-gray-700 font-semibold underline">Women's Bottom</a>
                    </div>
                    <div>
                        <img class="rounded-md w-full h-[340px] object-cover" src="@/assets/img/SearchBar/search3.png" alt="Women Boots">
                        <a href="#" class="block mt-2 text-sm text-gray-700 font-semibold underline">Women's Boots</a>
                    </div>
                    <div>
                        <img class="rounded-md w-full h-[340px] object-cover" src="@/assets/img/SearchBar/search4.png" alt="Men Best Sellers">
                        <a href="#" class="block mt-2 text-sm text-gray-700 font-semibold underline">Men's Best Sellers</a>
                    </div> 
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
const props = defineProps({
  showSearch: Boolean,
  searchQuery: String
});

const emit = defineEmits(["update:showSearch", "update:searchQuery"]);

function toggleSearch() {
  emit("update:showSearch", false);
}
</script>
