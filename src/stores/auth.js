import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({ loggedIn: false, counter: 0 }),
  getters: {
    getLogin: (state) => state.loggedIn,
    doubleCounter: (state) => state.counter * 2
  },
  actions: {
    login() {
      this.loggedIn = true
    },
    logout() {
      this.loggedIn = false
    }
  },
  persist: true
})
