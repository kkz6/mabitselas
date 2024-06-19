<template>
  THis is the dashboard page after login

  <button @click.prevent="logout">Logout</button>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()
const logout = () => {
  authStore.logout()
  router.push({ name: 'Login' })
}
</script>
