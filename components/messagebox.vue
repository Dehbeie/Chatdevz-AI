<template>
  <div class="flex justify-center mt-10 flex-col items-center">
    <div class="flex w-full justify-center">
      <input 
        type="text" 
        placeholder="Message ChatDev..." 
        v-model="message"
        class="px-5 py-3 w-[40%] rounded-l-full border-none outline-none text-[#f0f0f0] bg-transparent text-[16px] shadow-[0_0_10px_#00F2FF] transition-all duration-300 focus:shadow-[0_0_20px_#00F2FF] placeholder:text-[#ccc]"
        @keyup.enter="sendMessage"
      />
      <button 
        @click="sendMessage"
        class="bg-gradient-to-r from-[#4a4aff] to-[#00F2FF] border-none px-6 py-3 rounded-r-full text-white text-[18px] cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#00F2FF]"
      >
        ➤
      </button>
    </div>

    <!-- Response display -->
    <div v-if="reply" class="mt-5 text-white max-w-[500px] text-center p-4 bg-[#1a1a66] rounded-lg">
      {{ reply }}
    </div>

    <!-- Loading indicator -->
    <div v-if="loading" class="mt-5 text-gray-400">Loading...</div>

    <!-- Error -->
    <div v-if="error" class="mt-5 text-red-500">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
const reply = ref('')
const loading = ref(false)
const error = ref('')

// Send the message to the server API
const sendMessage = async () => {
  if (!message.value.trim()) return

  loading.value = true
  error.value = ''
  reply.value = ''

  try {
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: { message: message.value }
    })

    if (response.error) {
      error.value = response.error
    } else {
      reply.value = response.reply
    }
  } catch (err) {
    error.value = 'Failed to send message.'
    console.error(err)
  } finally {
    loading.value = false
    message.value = ''
  }
}
</script>
