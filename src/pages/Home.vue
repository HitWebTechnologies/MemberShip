<template>
  <div class="container mx-auto pt-8">
    <h3 class="font-medium mb-4">Welcome</h3>
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
