<template>
  <div
    :style="styleObject"
    class="pointer-events-none -z-10 rounded-full blur-3xl"
    aria-hidden="true"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: [Number, String], default: 400 }, 
  color: { type: String, default: '#00F2FF' },
  opacity: { type: Number, default: 0.22 },
  
  bottom: { type: [Number, String], default: '-6rem' },
  left: { type: [Number, String], default: '50%' },
  transform: { type: String, default: 'translateX(-50%)' }
})

const styleObject = computed(() => {
  const sizeValue = typeof props.size === 'number' ? `${props.size}px` : props.size
  const leftValue = typeof props.left === 'number' ? `${props.left}px` : props.left
  const bottomValue = typeof props.bottom === 'number' ? `${props.bottom}px` : props.bottom

  return {
    position: 'absolute',
    width: sizeValue,
    height: sizeValue,
    left: leftValue,
    bottom: bottomValue,
    transform: props.transform,
    background: `radial-gradient(circle at center, ${props.color} 0%, rgba(26,26,102,0) 60%)`,
    opacity: `${props.opacity}`,
    pointerEvents: 'none'
  }
})
</script>

<style scoped>

.blur-3xl {
  filter: blur(36px);
}
</style>
