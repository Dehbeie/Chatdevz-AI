<template>
  <section class="relative text-center overflow-hidden px-5 py-15">
    
    <NeonGlow position="bottom-center" />

    
    <div class="flex justify-center gap-5 mb-15">
      <div class="bg-[#1a1a66] text-white px-5 py-2.5 rounded-[12px] min-w-[180px] h-[50px] flex items-center justify-center font-bold text-[16px] transition-all duration-300">General Creator</div>
      <div class="bg-[#1a1a66] text-white px-5 py-2.5 rounded-[12px] min-w-[180px] h-[50px] flex items-center justify-center font-bold text-[16px] transition-all duration-300">Sales Advisor</div>
      <div class="bg-white text-black px-5 py-2.5 rounded-[12px] min-w-[180px] h-[50px] flex items-center justify-center font-bold text-[16px] transition-all duration-300">Negotiation Expert</div>
      <div class="bg-[#1a1a66] text-white px-5 py-2.5 rounded-[12px] min-w-[180px] h-[50px] flex items-center justify-center font-bold text-[16px] transition-all duration-300">Marketing Guru</div>
    </div>

   
    <div class="max-w-[600px] mx-auto my-12">
      <div class="w-20 h-20 rounded-full bg-[#1a1a66] flex items-center justify-center mx-auto mb-5">
        <Handshake class="w-10 h-10 text-black" />
      </div>
      <h2 class="text-[24px] font-bold mb-3">Negotiation Expert</h2>
      <p class="text-gray-400 text-[16px] leading-[1.5]">
        Gain an edge in every deal with ChatDev’s AI-driven 
        negotiation tips and scenario-based strategies.
      </p>
    </div>

    <MessageBox />
  </section>
</template>

<script setup>
import MessageBox from '~/components/messagebox.vue'
import NeonGlow from '~/components/neonglow.vue'
import { Handshake } from 'lucide-vue-next'
</script>

<style scoped>

</style>
