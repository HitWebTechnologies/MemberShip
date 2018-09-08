<template>
  <div class="border-t-4 border-green h-screen flex justify-center items-center">
    <div class="container mx-auto py-8">
      <AppAlertBox class="form-area mx-auto" :error="error" @clearError="clearError"/>
      <form class="form-area mx-auto lflex bg-white p-6 rounded" @submit.prevent="registerAccountLogin">
      
      
      <h3 class="mb-6 pb-4 font-light text-2xl border-b">Create your Signup account</h3>
        <!-- social Signup
        comment it out. we dont need it yet.
        <div class="w-full flex items-center justify-between pb-4 border-b mb-6">
          <button class="block w-1/2-almost py-4 px-6 bg-white text-blue border-2 hover:bg-grey-lightest rounded">Signup with Google</button>
          <button class="block w-1/2-almost py-4 px-6 bg-blue text-white border-2 border-transparent hover:bg-blue-dark rounded">Signup with Facebook</button>
        </div>
        
        manual Signup -->
        <div>
          <div class="mb-6 pb-6 border-b">
            <label for="username" class="block mb-2 font-medium">Your Reg Number Is</label>      
            <input v-model="account.username" id="username" readonly required name="username" type="text" class="w-full bg-grey-lightest p-3 rounded border-2. border-grey-light" placeholder="JohnDoe">
          </div>

          <div class="mb-6">
            <label for="password" class="block mb-2 font-medium">Enter your password <span class="text-orange">*</span></label>      
            <input v-model="account.password" id="password" required name="password" type="password" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="***">
          </div>

          <div class="mb-6">
            <label for="confirmPassword" class="block mb-2 font-medium">Confirm your password <span class="text-orange">*</span></label>      
            <input v-model="confirmPassword" id="confirmPassword" required name="confirmPassword" type="password" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="***">
          </div>

          <button @click="registerAccountLogin" :disabled="registrationInProgress" class="block w-full py-4 px-6 bg-green text-white hover:bg-green-dark rounded">
            <span v-if="!registrationInProgress">Create my account</span>
            <loading-spinner v-else color="white"/>
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import axios from '@/libraries/axios'
import { b64DecodeUnicode } from '@/libraries/utils'
import LoadingSpinner from '@/components/LoadingSpinner'
import AppAlertBox from '@/components/AppAlertBox'

export default {
  mounted () {
    try {
      this.userId = b64DecodeUnicode(this.$route.query.ssid)
    } catch (error) {
      console.log("Invalid url")
    }
  },
  components: {
    LoadingSpinner,
    AppAlertBox
  },
  data () {
    return {
      account: {
        username: 'wew',
        password: ''
      },
      confirmPassword: '',
      userId: '',

      error: {
        show: false,
        text: ''
      },

      registrationInProgress: false
    }
  },
  methods: {
    registerAccountLogin () {
      if (!this.account.username || !this.account.password || this.account.confirmPassword) {
        return false
      }
      if (this.account.password !== this.confirmPassword) {
        // throw an error and return
        this.error.show = true
        this.error.text = 'Please enter matching passwords'
        return
      }

      this.registrationInProgress = true
      axios.post(`/register-login/${this.userId}`, {
        ...this.account
      })
        .then(res => {
          console.log(res.data)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.error.show = true
          this.registrationInProgress = false
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
      this.registrationInProgress = false
    }
  }
}
</script>

<style>
  .form-area {
    max-width: 600px;
  }
</style>
