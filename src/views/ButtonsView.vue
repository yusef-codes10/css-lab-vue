<script setup>
import RetroButton from '@/components/buttons/RetroButton.vue'
import ShadowButton from '@/components/buttons/shadowButton.vue';
</script>

<template>
  <div class="buttons">
    This is the buttons view
    <RetroButton />
    <ShadowButton />
  </div>
</template>

<style scoped>
.buttons {
  height: 100vh;
  background-color: saddlebrown;
}
</style>
