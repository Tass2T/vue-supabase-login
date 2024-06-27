<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const { logOut } = useAuthStore()
</script>

<template>
  <main class="size-screen flex gap-2">
    <span>HOME</span>
    <button @click="logOut()">Logout</button>
  </main>
</template>
