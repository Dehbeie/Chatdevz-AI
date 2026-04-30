<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <h2 class="mt-2 text-center text-2xl font-bold tracking-tight text-white">
        Create your account
      </h2>
    </div>

    <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-md">

      <!--  FORM -->
      <form class="space-y-6" @submit.prevent="createUser">

        <!-- EMAIL -->
        <div>
          <label class="block text-sm font-medium text-gray-100">Email</label>
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              required
              class="block w-full rounded-md bg-white/5 px-1.5 py-1.5 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <!-- PASSWORD -->
        <div>
          <label class="block text-sm font-medium text-gray-100">Password</label>
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              required
              class="block w-full rounded-md bg-white/5 px-1.5 py-1.5 text-base text-black outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <!-- CONFIRM PASSWORD -->
        <div>
          <label class="block text-sm font-medium text-gray-100">Confirm Password</label>
          <div class="mt-2">
            <input
              v-model="passwordConfirm"
              type="password"
              required
              class="block w-full rounded-md bg-white/5 px-1.5 py-1.5 text-base text-black outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <!-- BUTTON -->
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="flex w-full justify-center rounded-md bg-indigo-500 px-1.5 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-50"
          >
            {{ loading ? 'Creating account...' : 'Sign up' }}
          </button>
           <!-- SUCCESS / ERROR MESSAGES -->
      <div v-if="successMessage" class="mt-3 text-green-500 font-medium text-center">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="mt-3 text-red-500 font-medium text-center">
        {{ errorMessage }}
      </div>
        </div>
      </form>

      <p class="mt-2 text-center text-sm text-gray-400">
        Already have an account?
        <NuxtLink to="/auth/login" class="font-semibold text-indigo-400 hover:text-indigo-300">
          Sign in
        </NuxtLink>
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import pb from '../../composables/usePocketBase'

// Reactive variables
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const loading = ref(false)

// Messages
const successMessage = ref('')
const errorMessage = ref('')

// Create user function
const createUser = async () => {
  // Reset messages
  successMessage.value = ''
  errorMessage.value = ''

  // Frontend validation
  if (!email.value || !password.value || !passwordConfirm.value) {
    errorMessage.value = 'All fields are required!'
    return
  }

  if (password.value !== passwordConfirm.value) {
    errorMessage.value = "Passwords don't match!"
    return
  }

  loading.value = true

  try {
    //  Create user in PocketBase
    const user = await pb.collection('users').create({
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value
    })
    console.log('User created:', user)

    //  Request email verification
    await pb.collection('users').requestVerification(email.value)
    console.log('Verification email sent')

    //  Show success message and instruct user to check email
    successMessage.value = '✅ User created! Please check your email to verify your account before logging in.'

    //  Clear form
    email.value = ''
    password.value = ''
    passwordConfirm.value = ''

  } catch (error: any) {
    console.error(error)
    errorMessage.value = '❌ Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>