<template>
  <div id="app" class="font-sans">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* See this file for all the comments on the meaning of the code below */
  /* @import './assets/css/app.css'; */
 @tailwind preflight;
 @tailwind components;
 @tailwind utilities;

 body {
   line-height: 1.4rem
 }

 p {
   @apply .mb-2
 }
</style>
