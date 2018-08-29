<template>
  <div class="">
    <!-- The app navigatioinn bar -->
    <div class="bg-black border-b">
      <div class="container mx-auto flex justify-between items-center ">
        <a href="#" @click="$router.push('/')" class="flex justify-center py-4 no-underline text-white">
          <!-- A fancy makeshift icon. Replace with actual icon you will design -->
            <span class="bg-green border-2 border-green text-white  py-1 px-2  rounded-l m-0">HIT</span>
            <span class="border-2 border-green py-1 px-2 rounded-r m-0">WebTech</span> 
        </a>

        <a href="#" class="flex items-center p-4 no-underline text-white hover:bg-green-lightest">
          <div class="w-8 h-8 rounded-full bg-green-light mr-2">&nbsp;</div>
          <span>Kudakwashe Paradzayi</span>
        </a>
      </div>
    </div>

    <!-- A secondary nav bar -->
    <div class="bg-white">
      <div class="flex container mx-auto">
        <a href="#" class="border-b-2 border-green p-4 no-underline text-grey-darkest">
          Club Members
        </a>
        <a href="#" class="border-b-2 border-transparent p-4 no-underline text-grey-darkest">
          Settings
        </a>
      </div>
    </div>

    <!-- where the main app routes will be mounted -->
    <div class="h-screen flex items-center justify-center">
      <span class="mr-4">A very basic setup of <a href="https://vuejs.org" class="text-green">vue</a> with <a href="https://tailwindcss.com" class="text-green">tailwind</a>.</span>
      <button class="py-4 px-6 bg-green text-white shadow-lg rounded" @click="$router.push('/register')">Proceed to registration</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
