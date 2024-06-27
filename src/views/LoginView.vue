<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const { logWithGoogle } = useAuthStore()
</script>

<template>
  <main class="size-full flex flex-col items-center justify-center gap-2">
    <button class="" @click="logWithGoogle">Log</button>
  </main>
</template>
