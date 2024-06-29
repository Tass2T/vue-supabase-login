<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const { logOut } = useAuthStore()
</script>

<template>
  <div class="h-14 w-full bg-red-200 flex items-center justify-end p-5">
    <button class="bg-amber-50 py-2 px-4 rounded text-red-300" @click="logOut()">Logout</button>
  </div>
</template>
