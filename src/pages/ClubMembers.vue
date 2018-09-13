<template>
  <div class="container mx-auto pt-8">
    <h3 class="font-medium mb-6">Club members</h3>
    <div class="bg-white rounded overflow-hidden shadow px-4 mb-4">
      <table class="w-full min-w-full rounded">
        <thead>
          <th class="p-4 bg-white border-b-2 border-grey-light text-left font-medium">Name</th>
          <th class="p-4 bg-white border-b-2 border-grey-light text-left font-medium">Program & Year</th>
          <th class="p-4 bg-white border-b-2 border-grey-light text-left font-medium">Twitter Handle</th>
        </thead>
        <tbody>
          <tr  v-if="members.length === 0" class="p-4 my-4 -ml-4 flex items-center justify-center bg-grey-lighter rounded-r">
           <td><LoadingSpinner color="lightgreen"/></td>
          </tr>
          <tr v-for="member in members" :key="member._id">
            <td class="px-4 py-3 border-b border-grey-lighter text-left">
              <div class="flex items-center">
                <div class="h-8 w-8 rounded-full overflow-hidden mr-2">
                  <img class="h-full w-full bg-grey">
                </div>
                <div class="flex flex-col">
                  <span class="font-medium ">{{ member.fullName }}</span>
                  <span class="text-grey-dark">{{ role }}</span>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border-b border-grey-lighter text-left">
              <div class="flex flex-col">
                <span class="font-medium ">{{ degreePrograms.find(m => m.code === member.degreeProgram).title }}</span>
                <span class="text-grey-dark">{{ member.level }}</span>
              </div>
            </td>
            <td class="px-4 py-3 border-b border-grey-lighter text-left">
              <a :href="`https://twitter.com/${member.twitterHandle}`" target="_blank" class="text-green no-underline">{{ member.twitterHandle }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from '@/libraries/axios'
import LoadingSpinner from '@/components/LoadingSpinner'
import degreePrograms from '@/data/degree-programs'

export default {
  mounted () {
    axios.get('/members')
      .then(response => {
        this.members = response.data.members
      })
      .catch(error => {
        this.error.show = true
        this.error.title = 'Could not retrieve the members. Please try again.'
      })
  },
  components: {
    LoadingSpinner
  },
  data () {
    return {
      members: [],
      degreePrograms,
      error: {
        show: false,
        title: ''
      }
    }
  },


}
</script>

<style>

</style>
