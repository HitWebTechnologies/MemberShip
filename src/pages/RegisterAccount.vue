<template>
  <div class="border-t-4 border-green h-screen flex justify-center items-center">
    <div class="container mx-auto py-8">

      <div class="form-area mx-auto bg-white p-6 rounded ">
      <h3 class="mb-6 pb-4 font-light text-2xl border-b">Welcome to HIT Web Technologies</h3>

        <div class="flex mb-6">
          <!-- Full name -->
          <div class="w-3/5 mr-4">
            <label for="name" class="block mb-2 font-medium">Enter your full name</label>      
            <input v-model="account.fullName" id="name" name="name" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="John Doe">
          </div>

          <!-- Reg number -->
          <div class="flex-1">
            <label for="regNumber" class="block mb-2 font-medium">Enter Reg Number</label>
            <input v-model="account.regNumber" id="regNumber" name="regNumber" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="H181234A">
          </div>
        </div>

        <div class="flex mb-6">
          <!-- Reg number -->
          <div class="flex-1 mr-4">
            <label for="phoneNumber" class="block mb-2 font-medium">Enter Phone Number</label>
            <input v-model="account.phoneNumber" id="phoneNumber" name="phoneNumber" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="0717123456">
          </div>

          <!-- email -->
          <div class="flex-1">
            <label for="email" class="block mb-2 font-medium">Enter Email Address</label>
            <input v-model="account.emailAddress" id="email" name="email" type="email" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="john.doe@email.com">
          </div>
        </div>

        <div class="flex mb-6">
          <!-- Year -->
          <div class="flex-1 mr-4">
            <label for="year" class="block mb-2 font-medium">Enter Year</label>
            <select v-model="account.level" id="year" name="year" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="H181234A">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div class="flex-1">
            <label for="year" class="block mb-2 font-medium">What program?</label>
            <select v-model="account.degreeProgram" id="year" name="year" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="H181234A">
              <option v-for="program in degreePrograms" :value="program.code" :key="program.code">
                {{ program.title }}
              </option>
            </select>
          </div>
        </div>

        <div class="mb-6">
          <label for="twitter" class="block mb-2 font-medium">Twitter</label>
          <input v-model="account.twitterHandle" id="twitter" name="twitter" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="@kudapara">
        </div>
        <button @click="registerAccount()" class="block w-full py-4 px-6 bg-green text-white shadow-md- hover:bg-green-dark rounded">Create my account</button>

      </div>

    </div>
  </div>
</template>

<script>
import axios from '@/libraries/axios'
export default {
  data () {
    return {
      account: {
        fullName: '',
        regNumber: '',
        phoneNumber: '',
        emailAddress: '',
        level: '',
        degreeProgram: 'ISE',
        twitterHandle: '',
      },

      degreePrograms: [
        { code: 'ISE', title: 'Software Engineering' },
        { code: 'ICS', title: 'Computer Science' },
        { code: 'ISA', title: 'Information Security And Assuarance' },
        { code: 'IIT', title: 'Information Technology'}
      ]
    }
  },
  methods: {
    registerAccount () {
      axios.post('/register', {
        ...this.account
      })
        .then(res => {
          console.log(res.data)
          this.$router.push('/register-login')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
  .form-area {
    max-width: 600px;
  }
</style>
