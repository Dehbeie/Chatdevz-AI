<template>
  <div class="bg-gradient-to-b from-[#060632] via-[#1a1a66] to-[#101057] p-5 rounded-[12px] text-center text-gray-400 border border-transparent transition-all duration-300 w-[220px] hover:border-[#00f2ff] hover:shadow-[0_0_20px_#00f2ff] hover:-translate-y-1.25">
    <div class="w-[60px] h-[60px] rounded-full bg-[#2E2E93] flex items-center justify-center mx-auto mb-3">
      <component :is="icon" class="w-[28px] h-[28px] text-white" />
    </div>
    <h3 class="text-white text-[18px] font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-400 text-[14px] leading-[1.3]">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: Object
})
</script>

<style scoped>
</style>
