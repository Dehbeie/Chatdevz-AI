<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import pb from '../../../composables/usePocketBase'

const route = useRoute()
const router = useRouter()
const message = ref('Verifying your email...')

onMounted(async () => {
  try {
    // Get token from URL
    const token = route.params.token as string

    // Confirm verification with PocketBase
    await pb.collection('users').confirmVerification(token)

    // Success message
    message.value = '✅ Email verified! Redirecting to login page...'

    // Wait 2 seconds then redirect to login page
    setTimeout(() => {
      router.push('/auth/login') // adjust this path to your login route
    }, 2000)
  } catch (err) {
    console.error(err)
    message.value = '❌ Verification failed or link expired.'
  }
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-900">
    <p class="text-center text-white text-lg">{{ message }}</p>
  </div>
</template>