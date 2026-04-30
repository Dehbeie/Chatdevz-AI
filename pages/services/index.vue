<template>
  <section class="text-center px-5 py-20">
    <h2 class="text-[32px] mb-2.5">Explore ChatDev</h2>
    <p class="text-gray-400 mb-10">
      Engage with ChatDev to receive expert guidance tailored to your needs 
      in sales, negotiation, marketing, and more.
    </p>

    <div class="flex justify-center gap-5 flex-wrap mb-12">
    <NuxtLink to="/services/general" class="cursor-pointer">
      <Card 
        title="General Advisor" 
        description="Watch your requests get created in real-time..." 
        :icon="User" 
      />
    </NuxtLink>

    <NuxtLink to="/services/sales" class="cursor-pointer">
      <Card 
        title="Sales Advisor" 
        description="Boost your digital sales with strategies..." 
        :icon="ShoppingCart" 
      />
    </NuxtLink>

    <NuxtLink to="/services/negotiation" class="cursor-pointer"> 
      <Card 
        title="Negotiation Expert" 
        description="Master the art of negotiation..." 
        :icon="Handshake" 
      />
    </NuxtLink>

    <NuxtLink to="/services/marketing" class="cursor-pointer">  
      <Card 
        title="Marketing Guru" 
        description="Elevate your marketing with campaigns..." 
        :icon="Megaphone" 
      />
    </NuxtLink>
    </div>

    <MessageBox />
  </section>
</template>

<script setup>
import Card from '~/components/card.vue'
import MessageBox from '~/components/messagebox.vue'
import { User, ShoppingCart, Handshake, Megaphone } from "lucide-vue-next"
</script>

<style scoped>
</style>
