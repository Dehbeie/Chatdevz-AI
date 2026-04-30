<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
      <h2 class="mt-4 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="loginUser" class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-100">Email address</label>
          <div class="mt-2">
            <input v-model="email" type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="password" type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" :disabled="loading" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{{ loading ? 'Logging in...' : 'Sign in' }}</button>
        </div>
      </form>

      <p v-if="errorMessage" class="mt-4 text-red-500 text-center">{{ errorMessage }}</p>

      <p class="mt-4 text-center text-sm/6 text-gray-400">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Start a 14 day free trial</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import pb from '../../composables/usePocketBase'

const router = useRouter()

// Reactive variables
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const loginUser = async () => {
  errorMessage.value = ''
  if (!email.value || !password.value) {
    errorMessage.value = 'All fields are required!'
    return
  }

  loading.value = true
  try {
    const authData = await pb.collection('users').authWithPassword(
      email.value,
      password.value
    )

    if (!authData.record.verified) {
      errorMessage.value = 'Please verify your email before logging in.'
      loading.value = false
      return
    }

    // Login successful, redirect to home page
    router.push('/')
  } catch (err: any) {
    console.error(err)
    errorMessage.value = 'Invalid email or password.'
  } finally {
    loading.value = false
  }
}
</script>