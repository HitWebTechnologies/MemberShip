<template>
  <div class="container mx-auto pt-8">
    <h3 class="font-medium mb-4">Welcome</h3>

    <section class="flex items-center border-l-4 border-green p-6 bg-white shadow rounded mb-4">
      <svg class="h-4 mr-4" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"/></svg>
      If you have not been added to the whatsapp group send a request to Kudakwashe (<strong>0785274391</strong>) or Blessed (<strong>0776224111</strong>)
    </section>
    <section class="p-6 bg-white shadow rounded">
      <p>You are officially a <strong>HIT Web Technology club</strong> member.</p>
      <p>We will add more features to this website together.</p>
      <p> Its going to be fun :) </p>

     <div class="mt-5">
      <a href="https://github.com/HitWebTechnologies/MemberShip" class="text-green no-underline mt-5 mr-4">Checkout the source code</a>
      <button class="text-green no-underline" @click="$router.push('/constitution')">Read the Club's Constitution</button>
     </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
