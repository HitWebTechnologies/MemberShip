<template>
  <div class="border-t-4 border-green h-screen sm:flex sm:justify-center sm:items-center">
    <div class="container mx-auto sm:py-8">

      <AppAlertBox class="form-area mx-auto" :error="error" @clearError="clearError()"/>

      <form class="form-area mx-auto bg-white p-6 rounded" @submit.prevent="registerAccount">


      <h3 class="mb-6 pb-4 font-light text-2xl border-b">Welcome to HIT Web Technologies</h3>

        <div class="flex flex-wrap mb-6">
          <!-- Full name -->
          <div class="w-full mb-4 sm:w-3/5 sm:mb-0 sm:mr-4">
            <label for="name" class="block mb-2 font-medium">Enter your full name <span class="text-orange">*</span></label>      
            <input v-model.trim="account.fullName" id="name" name="name" required type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="">
          </div>

          <!-- Reg number -->
          <div class="flex-1">
            <label for="regNumber" class="block mb-2 font-medium">Enter Reg Number <span class="text-orange">*</span></label>
            <input v-model="account.regNumber" id="regNumber" required name="regNumber" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="">
            <span class="text-orange" v-if="validationErrors.regNumber">Invalid RegNumber</span>
          </div>
        </div>

        <div class="flex flex-wrap mb-6">

          <!-- email -->
          <div class="w-full mb-4 sm:w-1/2 sm:mr-4 sm:mb-0">
            <label for="email" class="block mb-2 font-medium">Enter your email address</label>
            <div class="flex">
              <input v-model="account.emailAddress" id="email" name="email" type="email" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="">
            </div>
          </div>
          <!-- Reg number -->
          <div class="flex-1">
            <label for="phoneNumber" class="block mb-2 font-medium">Enter Phone Number</label>
            <input v-model="account.phoneNumber" id="phoneNumber" name="phoneNumber" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="">
          </div>
        </div>

        <div class="flex flex-wrap mb-6">
          <!-- Year -->
          <div class="w-full mb-4 sm:w-1/2 sm:mr-4 sm:mb-0">
            <label for="year" class="block mb-2 font-medium">Enter Year</label>
            <select v-model="account.level" id="year" name="year" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div class="flex-1">
            <label for="year" class="block mb-2 font-medium">What program?</label>
            <select v-model="account.degreeProgram" id="year" name="year" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="">
              <option v-for="program in degreePrograms" :value="program.code" :key="program.code">
                {{ program.title }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap mb-6 items-center">
          <div class="w-full mb-4 sm:w-1/2 sm:mr-4 sm:mb-0">
            <label for="year" class="block mb-2 font-medium">Enter Your Gender</label>
            <select v-model="account.gender" id="year" name="year" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="flex-1">
            <label for="twitter" class="block mb-2 font-medium">Twitter (optional)</label>
            <input v-model="account.twitterHandle" id="twitter" name="twitter" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="@kudapara">
          </div>
        </div>

        <button :disabled="registrationInProgress" class="block w-full py-4 px-6 bg-green text-white hover:bg-green-dark rounded">
          <span v-if="!registrationInProgress">Create my account</span>
          <loading-spinner v-else color="white"/>
        </button>

      </form>

    </div>
  </div>
</template>

<script>
import axios from '@/libraries/axios'
import LoadingSpinner from '@/components/LoadingSpinner'
import AppAlertBox from '@/components/AppAlertBox'
import degreePrograms from '@/data/degree-programs.json'

export default {
  components: {
    LoadingSpinner,
    AppAlertBox
  },

  data () {
    return {
      account: {
        fullName: '',
        regNumber: '',
        phoneNumber: '',
        emailAddress: '',
        level: '1',
        gender: 'male',
        degreeProgram: 'ISE',
        twitterHandle: '',
      },

      degreePrograms,

      registrationInProgress: false,

      error: {
        show: false,
        text: ''
      },

      validationErrors: {
        regNumber: false
      }
    }
  },

  methods: {
    registerAccount (e) {
      console.log(e)
      this.registrationInProgress = true
      if (this.isFormValid() !== true) {
        return this.registrationInProgress = false
      }

      axios.post('/register', {
        ...this.account
      })
        .then(res => {
          console.log(res.data)
          this.$router.push(`/success?emailAddress=${this.account.emailAddress}`)
        })
        .catch(err => {
          console.log(JSON.stringify(err))
          this.error.show = true
          this.error.text = err.response.data.message || 'An unexpected error occured :/'
          this.registrationInProgress = false
        })
    },

    clearError () {
      console.log("clearing the error")
      this.error.show = false
      this.error.text = ''
      this.registrationInProgress = false
    },

    isRegNumberValid (regNumber) {
      return regNumber.length === 8 &&
        regNumber[0].toLocaleLowerCase() === 'h' &&
        regNumber.substring(1,7).match(/[0-9]/) &&
        regNumber[7].match(/[a-z]/i)
    },

    isFormValid () {
      let member = this.account
      // check if required fields are present
      if (!member.fullName || !member.regNumber || !member.level || !member.degreeProgram) {
        this.error.show = true
        this.error.text = "Please fill in all required fields"

        return false
      }
      
      // check if the id is  - ask blessed for the regex for Ids
      if (!this.isRegNumberValid(member.regNumber)) {
        this.validationErrors.regNumber = true
        return false
      }
      
      return true
    }
  }
}
</script>

<style>
  .form-area {
    max-width: 600px;
  }
</style>
