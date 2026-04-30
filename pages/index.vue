
<template>
  <HeroSection />
  <Neonglow position="bottom" />

  <div class="w-[600px] max-w-full flex justify-center px-5">
    <NuxtLink 
      to="/services"
      class="text-gray-400 text-[20px] font-outfit underline-offset-4 hover:underline tracking-wide"
    >
      Explore ChatDev
    </NuxtLink>
  </div>

  <section class="flex flex-row justify-center items-start gap-[15px] p-5">
   <NuxtLink to="/services/general" class="cursor-pointer">
    <Card 
      title="General Creator" 
      description="Watch your request get created by ChatDev in real-time, interpreting your requirement."
      :icon="User"
    />
   </NuxtLink>

   <NuxtLink to="/services/sales" class="cursor-pointer">
    <Card 
      title="Sales Advisor" 
      description="Boost your digital sales with expert tips and proven strategies tailored for digital marketing professionals."
      :icon="ShoppingCart"
    />
   </NuxtLink>

   <NuxtLink to="/services/negotiation" class="cursor-pointer">
    <Card 
      title="Negotiation Expert" 
      description="Master the art of negotiation with advice on closing deals, overcoming objections, and maximizing value."
      :icon="Handshake"
    />
   </NuxtLink>

   <NuxtLink to="/services/marketing" class="cursor-pointer">
    <Card 
      title="Marketing Guru" 
      description="Elevate your marketing game with creative campaigns, branding insights, and social media strategies that attract clients."
      :icon="Megaphone"
    />
   </NuxtLink>
  </section>
</template>

<script setup>
import HeroSection from '~/components/herosection.vue'
import Card from '~/components/card.vue'
import { User, ShoppingCart, Handshake, Megaphone } from "lucide-vue-next"
</script>

<style scoped>
</style>
 