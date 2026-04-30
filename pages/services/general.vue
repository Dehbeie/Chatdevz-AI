<template>
  <section class="relative flex flex-col min-h-screen p-5 bg-[#060632]">
 
    <NeonGlow position="top-center" />

    
    <div class="flex-1 flex flex-col gap-4 overflow-y-auto mb-5 p-2">
    
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="flex max-w-70%]"
        :class="msg.sender === 'user' ? 'self-end justify-end' : 'self-start'"
      >
        <div
          class="px-4 py-3 rounded-[20px] text-[15px] leading-[1.4] break-words"
          :class="msg.sender === 'user' ? 'bg-[#1a1a66] text-white rounded-br-[6px]' : 'bg-gray-200 text-black rounded-bl-[6px]'"
        >
          {{ msg.text }}
        </div>
      </div>
    </div>

    <Messagebox/>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import NeonGlow from '~/components/neonglow.vue'


const messages = ref([
  { sender: 'ai', text: '👋 Hi, I am ChatDev. How can I help you today?' }
])
const newMessage = ref('')


function sendMessage() {
  if (!newMessage.value.trim()) return

  
  messages.value.push({ sender: 'user', text: newMessage.value })

  
  const userInput = newMessage.value
  newMessage.value = ''

  /
  setTimeout(() => {
    messages.value.push({
      sender: 'ai',
      text: `You said: "${userInput}". Let’s build something amazing 🚀`
    })
  }, 800)
}
</script>

<style scoped>

</style>
