<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <main class="size-screen flex flex-col">
    <HeaderComponent />
    <RouterView />
  </main>
</template>
