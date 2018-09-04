<template>
  <div class="">
    <!-- The app navigatioinn bar -->
    <div class="bg-purple border-b">
      <div class="container mx-auto flex justify-between items-center ">
        <a href="#" @click="$router.push('/')" class="flex justify-center py-4 no-underline text-white">
          <!-- A fancy makeshift icon. Replace with actual icon you will design -->
            <span class="bg-green border-2 border-green text-white  py-1 px-2  rounded-l m-0">HIT</span>
            <span class="border-2 border-green py-1 px-2 rounded-r m-0">WebTech</span> 
        </a>

        <div class="flex items-center">
          <a href="#" @click="$router.push('/constitution')" class="border-b-2 border-transparent p-4 no-underline text-white hover:bg-grey-darkest rounded">
            Constitution
          </a>

          <a href="#" class="flex items-center p-4 no-underline text-white hover:bg-grey-darkest rounded">
            <div class="w-6 h-6 rounded-full bg-green-light mr-2">&nbsp;</div>
            <span>Kudakwashe</span>
          </a>
        </div>
      </div>
    </div>

    <!-- A secondary nav bar -->
    <div class="bg-white border-b">
      <div class="flex container mx-auto">
        <a href="#" @click="$router.push('/')" :class="{'border-green': $route.name === 'Home'}" class="border-b-2 border-transparent p-4 no-underline text-grey-darkest uppercase tracking-wide font-medium">
          Home
        </a>
        <a href="#" @click="$router.push('/members')" :class="{'border-green': $route.name === 'ClubMembers'}" class="border-b-2 border-transparent p-4 no-underline text-grey-darkest uppercase tracking-wide font-medium">
          Club Members
        </a>
      </div>
    </div>

    <!-- where the main app routes will be mounted -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
