<template>
  <div class="border-t-4 border-green h-screen sm:flex sm:justify-center sm:items-center">
    <div class="container mx-auto sm:py-8">
      <AppAlertBox class="form-area mx-auto" :error="error" @clearError="clearError"/>
      <form class="form-area mx-auto lflex bg-white p-6 rounded" @submit.prevent="login">
      
      
      <h3 class="mb-6 pb-4 font-light text-2xl border-b">Sign In</h3>

        <div>
          <div class="mb-6 pb-6 border-b">
            <label for="username" class="block mb-2 font-medium">Enter your Reg Number</label>      
            <div class="flex w-full">
              <input v-model="account.regNumber" id="regNumber" required name="regNumber" type="text" class="w-full p-3 rounded-l border-2 border-r-0 border-grey-light" placeholder="">
              <div class="p-3 bg-grey-light border-2 border-l-0 rounded-r">
                @hit.ac.zw
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label for="password" class="block mb-2 font-medium">Enter your password <span class="text-orange">*</span></label>      
            <input v-model="account.password" id="password" required name="password" type="password" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="***">
          </div>

          <button @click="login" :disabled="loginInProgress" class="block w-full py-4 px-6 bg-green text-white hover:bg-green-dark rounded">
            <span v-if="!loginInProgress">Sign in</span>
            <loading-spinner v-else color="white"/>
          </button>
        </div>


      </form>

      <div class="form-area mx-auto bg-white border-2 mt-4 rounded p-6">
        New to HitWebTech? <button class="text-green" @click="$router.push('/register')">Create your account now</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/libraries/axios'
import jwt from 'jsonwebtoken'
import LoadingSpinner from '@/components/LoadingSpinner'
import AppAlertBox from '@/components/AppAlertBox'

export default {
  components: {
    LoadingSpinner,
    AppAlertBox
  },
  data () {
    return {
      account: {
        regNumber: '',
        password: ''
      },

      error: {
        show: false,
        text: ''
      },

      loginInProgress: false
    }
  },
  methods: {
    login () {
      if (!this.account.regNumber || !this.account.password) {
        return false
      }
      
      this.loginInProgress = true
      axios.post(`/login`, {
        ...this.account
      })
        .then(res => {
          console.log(res.data)
          this.$store.commit('setAuthenticatedUser', res.data.member)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.error.show = true
          this.loginInProgress = false
          if (!err.response) {
            return this.error.text = "You have been disconnected from the internet. Reconnect and try again"
          }
          if (err.response.status == 400) {
            return this.error.text =  'The verification link provided is invalid. Please go back to your inbox and follow the link that was sent to you.'
          }
          this.error.text = err.response.data.message || 'An unexpected error occured :/'
        })
    },

    clearError () {
      this.error.show = false
      this.error.text = ''
      this.loginInProgress = false
    }
  }
}
</script>

<style>
  .form-area {
    max-width: 600px;
  }
</style>
