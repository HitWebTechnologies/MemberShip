<template>
  <div class="">
    <!-- The app navigatioinn bar -->
    <div class="bg-white border-b">
      <div class="container mx-auto flex justify-between items-center px-4">
        <a href="#" @click="$router.push('/')" class="flex justify-center py-4 no-underline">
          <!-- A fancy makeshift icon. Replace with actual icon you will design -->
            <span class="bg-green border-2 border-green text-white  py-1 px-2  rounded-l m-0">HIT</span>
            <span class="border-2 border-green py-1 px-2 text-green rounded-r m-0">WebTech</span> 
        </a>

        <div class="flex items-center">
          <a href="#" @click="$router.push('/constitution')" class="hidden sm:inline-block border-b-2 border-transparent p-4 no-underline hover:bg-grey-lighter rounded">
            Constitution
          </a>

          <a href="#" @click="logout" class="flex items-center p-4 no-underline hover:bg-grey-lighter rounded">
            <div class="w-6 h-6 rounded-full bg-green-light mr-2">&nbsp;</div>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>

    <!-- A secondary nav bar -->
    <div class="bg-white border-b shadow px-4">
      <div class="flex container mx-auto">
        <a href="#" @click="$router.push('/')" :class="{'border-green': $route.name === 'Home'}" class="border-b-2 border-transparent p-4 pl-0 no-underline text-grey-darkest uppercase tracking-wide font-medium">
          Home
        </a>
        <a href="#" @click="$router.push('/members')" :class="{'border-green': $route.name === 'ClubMembers'}" class="border-b-2 border-transparent p-4 no-underline text-grey-darkest uppercase tracking-wide font-medium">
          Club Members
        </a>
      </div>
    </div>

    <!-- where the main app routes will be mounted -->
    <router-view class="px-4 sm:px-0"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
