<script setup lang="ts">
import GoogleIcon from '@/assets/logos/google.svg'
import { useAuthStore } from '@/stores/auth'
const { logWithGoogle } = useAuthStore()
</script>

<template>
  <button
    class="border-2 border-red-200 py-2 px-4 flex gap-4 items-center rounded bg-white hover:bg-gray-50 hover:opacity-90"
    @click="logWithGoogle"
  >
    <GoogleIcon class="size-6" />
    <span>Log with Google</span>
  </button>
</template>
