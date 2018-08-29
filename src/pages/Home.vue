<template>
  <div>
    <section class="container mx-auto p-6 mt-6 bg-white shadow rounded">
      <p>You are officially a <strong>HIT Web Technology club</strong> member.</p>
      <p>We will add more features to this website together.</p>
      <p> Its going to be fun :) </p>

      <a href="https://github.com/HitWebTechnologies/MemberShip" class="py-4 px-6 text-green no-underline rounded border-green border-2 hover:bg-green hover:text-white mt-5 mr-4">Checkout the source code for this site</a>
      <button class="py-4 px-6 text-green rounded border-green border-2 hover:bg-green hover:text-white mt-5 " @click="$router.push('/constitution')">Read the Club's Constitution</button>
    </section>

    <div class="container mx-auto flex items-center justify-center rounded bg-white shadow mt-4 py-4 ">
      <span class="mr-4">A very basic setup of <a href="https://vuejs.org" class="text-green">vue</a> with <a href="https://tailwindcss.com" class="text-green">tailwind</a>.</span>
      <button class="py-4 px-6 bg-green text-white shadow-md rounded" @click="$router.push('/register')">Proceed to registration</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
