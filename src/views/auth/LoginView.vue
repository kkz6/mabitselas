<template>
  THis is the login page
  <button @click="loginAction">Login In</button>

  current login state {{ authStore.getLogin }}
  <button @click="router.push('/auth/register')">With router push</button>

  <RouterLink to="/auth/register">ROute me to register</RouterLink>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const loginAction = () => {
  authStore.login()
  router.push({ name: 'dashboard' })
}
</script>
