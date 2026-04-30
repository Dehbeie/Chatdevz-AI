<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <img
            :src="product.image"
            :alt="product.title"
            class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
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
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

interface Product {
  id: number
  title: string
  color: string
  price: string
  image: string
}

const products = ref<Product[]>([
  {
    id: 1,
    title: 'Basic Tee',
    color: 'Black',
    price: '$35',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    id: 2,
    title: 'Basic Tee',
    color: 'Aspen White',
    price: '$35',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg'
  },
  {
    id: 3,
    title: 'Basic Tee',
    color: 'Charcoal',
    price: '$35',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg'
  },
  {
    id: 4,
    title: 'Artwork Tee',
    color: 'Iso Dots',
    price: '$35',
    image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg'
  }
])
</script>

<style>

</style>