<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <img :src="product.image" :alt="product.image"
            class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <NuxtLink :to="`/product/${product.id}`">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ product.title }}
                </NuxtLink>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import pb from '../../composables/usePocketBase'

interface Product {
  id: string
  title: string
  color: string
  price: string
  image: string
  details: string
}

const products = ref<Product[]>([])

// Create a separate function to fetch products
const fetchProducts = async () => {
  try {
    const records = await pb.collection('products').getFullList()
    console.log('PocketBase products:', records)

    products.value = records.map(item => ({
      id: item.id,
      title: item.title,
      color: item.color,
      price: item.price,
      image: item.image,
      details: item.details
    }))
  } catch (err) {
    console.error('Error fetching products:', err)
  }
}

// Call the function inside onMounted
onMounted(() => {
  fetchProducts()
})
</script>