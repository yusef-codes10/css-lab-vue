<script setup>
import AppNav from '@/components/AppNav.vue'
</script>

<template>
  <div class="layout">
    <AppNav />
    <RouterView />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
</style>
