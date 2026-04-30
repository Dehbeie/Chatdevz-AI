<template>
  <div class="min-h-screen text-white font-sans relative overflow-hidden">
    <!-- Radial glow (behind everything) -->
    <div
      class="absolute inset-0 z-0 bg-[radial-gradient(circle_200px_at_bottom_center,_#00F2FF_0%,_rgba(26,26,102,0)_80%)]"
    ></div>

    <!-- Linear gradient base -->
    <div
      class="absolute inset-0 z-0 bg-[linear-gradient(180deg,_#0A0A29_0%,_#1A1A66_100%)]"
    ></div>

    <!-- App content (including NeonGlow) -->
    <div class="relative z-10">
      <Navbar />
      <slot />
    </div>
  </div>
</template>
