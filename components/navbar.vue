<template>
  <nav class="bg-[#16164A] backdrop-blur-md px-6 py-3 flex items-center justify-between relative">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <img src="/chatdev image.jpg" alt="Logo" class="h-8 w-8 object-contain" />
      <span class="text-white font-semibold text-lg">CHATDEV</span>
    </div>

    <!-- Desktop Links + Auth Buttons -->
    <div class="hidden md:flex items-center gap-4">
      <!-- Nav Links -->
      <ul class="flex gap-4 items-center">
        <li><NuxtLink to="/" class="text-white hover:text-cyan-400 transition">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="text-white hover:text-cyan-400 transition">About</NuxtLink></li>
        <li><NuxtLink to="/services" class="text-white hover:text-cyan-400 transition">Services</NuxtLink></li>
        <li><NuxtLink to="/product" class="text-white hover:text-cyan-400 transition">Product</NuxtLink></li>
      </ul>

      <!-- Auth Buttons -->
      <div class="flex gap-2">
        <NuxtLink to="/auth/login" class="border border-[#4a4aff] text-white px-3 py-1 rounded hover:bg-[#4a4aff] transition">Log In</NuxtLink>
        <NuxtLink to="/auth/signup" class="bg-[#4a4aff] text-white px-3 py-1 rounded hover:bg-cyan-400 transition">Sign Up</NuxtLink>
      </div>
    </div>

    <!-- Mobile Hamburger -->
    <div class="md:hidden flex items-center">
      <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="absolute top-full right-0 bg-[#16164A] w-48 py-4 px-6 flex flex-col gap-3 md:hidden shadow-lg z-50">
      <NuxtLink to="/" class="text-white hover:text-cyan-400 transition">Home</NuxtLink>
      <NuxtLink to="/about" class="text-white hover:text-cyan-400 transition">About</NuxtLink>
      <NuxtLink to="/services" class="text-white hover:text-cyan-400 transition">Services</NuxtLink>
      <NuxtLink to="/product" class="text-white hover:text-cyan-400 transition">Product</NuxtLink>
      <div class="flex flex-col gap-2 mt-2">
        <button class="border border-[#4a4aff] text-white px-3 py-1 rounded hover:bg-[#4a4aff] transition">Log In</button>
        <NuxtLink to="/auth/signup" class="bg-[#4a4aff] text-white px-3 py-1 rounded hover:bg-cyan-400 transition">Sign Up</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
</style>
