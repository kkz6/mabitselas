<template>This is the register page current login state {{ authStore.getLogin }}</template>
<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>
