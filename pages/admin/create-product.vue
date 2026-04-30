<template>
<div class="min-h-screen bg-dark-blue-900 flex justify-center px-4">
    <div class="w-full max-w-xl bg-dark-blue-900 p-8 rounded-xl shadow-md">

      <h2 class="text-2xl  font-bold mb-6 text-white text-center">
        Create Product
      </h2>

      <form @submit.prevent="createProduct" class="space-y-4">

        <!-- TITLE -->
        <div>
          <label class="block text-sm font-medium text-white">Title</label>
          <input
            v-model="title"
            type="text"
            class="mt-1 w-full border bg-transparent border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Product title"
          />
        </div>

        <!-- PRICE -->
        <div>
          <label class="block text-sm font-medium text-white">Price</label>

          <div class="mt-1 flex items-center border bg-transparent border-gray-300 rounded-md px-3 focus-within:ring-2 focus-within:ring-indigo-500">
            <span class="text-gray-500 mr-1">$</span>
            <input
              v-model="price"
              type="number"
              placeholder="0.00"
              class="w-full py-2 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <!-- IMAGE URL -->
        <div>
          <label class="block text-sm font-medium text-white">Image URL</label>
          <input
            v-model="image"
            type="text"
            class="mt-1 w-full border bg-transparent border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <!-- IMAGE PREVIEW -->
        <div v-if="image" class="mt-2">
          <img :src="image" class="h-32 rounded-md object-cover border" />
        </div>

        <!-- COLOR -->
        <div>
          <label class="block text-sm font-medium text-white">Color</label>
          <input
            v-model="color"
            type="text"
            class="mt-1 w-full border bg-transparent border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="e.g. Black"
          />
        </div>

        <!-- DETAILS -->
        <div>
          <label class="block text-sm font-medium text-white">Details</label>
          <textarea
            v-model="details"
            rows="3"
            class="mt-1 w-full border bg-transparent border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Product description"
          ></textarea>
        </div>

        <!-- BUTTON -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-indigo-600 item-center text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {{ loading ? 'Adding product...' : 'Add Product' }}
        </button>

      </form>

      <!-- SUCCESS MESSAGE -->
      <p v-if="successMessage" class="mt-4 text-green-600 font-medium">
        {{ successMessage }}
      </p>

      <!-- ERROR MESSAGE -->
      <p v-if="errorMessage" class="mt-4 text-red-600 font-medium">
        {{ errorMessage }}
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import pb from '../../composables/usePocketBase'

// FORM FIELDS
const title = ref('')
const price = ref('')
const image = ref('')
const color = ref('')
const details = ref('')

// UI STATE
const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// CREATE PRODUCT FUNCTION
const createProduct = async () => {

  successMessage.value = ''
  errorMessage.value = ''

  // VALIDATION
  if (!title.value || !price.value || !image.value || !color.value || !details.value) {
    errorMessage.value = 'All fields are required'
    return
  }

  loading.value = true

  try {

    const data = {
      title: title.value,
      price: Number(price.value),
      image: image.value,
      color: color.value,
      details: details.value
    }

    const record = await pb.collection('products').create(data)

    console.log('Created product:', record)

    successMessage.value = '✅ Product added successfully!'

    // RESET FORM
    title.value = ''
    price.value = ''
    image.value = ''
    color.value = ''
    details.value = ''

  } catch (error: any) {
    console.error(error)
    errorMessage.value = '❌ Something went wrong. Try again.'
  } finally {
    loading.value = false
  }
}
</script>