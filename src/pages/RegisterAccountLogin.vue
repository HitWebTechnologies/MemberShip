<template>
  <div class="border-t-4 border-green h-screen flex justify-center items-center">
    <div class="container mx-auto py-8">
      <h3 class="mb-6 font-light text-4xl">Login the way you want</h3>
      
      <div class="flex bg-white p-6 rounded">
        <!-- manual login -->
        <div class="flex-1 border-r px-6">
          <div class="mb-6">
            <label for="username" class="block mb-2 font-medium">Enter your username</label>      
            <input id="username" name="username" type="text" class="w-full bg-grey-lightest p-4 rounded border-2 border-green-lightest" placeholder="JohnDoe">
          </div>

          <div class="mb-6">
            <label for="password" class="block mb-2 font-medium">Enter your password</label>      
            <input id="password" name="password" type="text" class="w-full bg-grey-lightest p-4 rounded border-2 border-green-lightest" placeholder="***">
          </div>

          <div class="mb-6">
            <label for="confirmPassword" class="block mb-2 font-medium">Confirm your password</label>      
            <input id="confirmPassword" name="confirmPassword" type="text" class="w-full bg-grey-lightest p-4 rounded border-2 border-green-lightest" placeholder="***">
          </div>

          <button class="block w-64 py-4 px-6 bg-green text-white shadow-md hover:shadow-lg rounded">Create my account</button>
        </div>

        <!-- social login -->
        <div class="flex-1 flex flex-col justify-center items-center">
          <button class="block w-64 py-4 px-6 bg-white text-blue shadow-md hover:shadow-lg rounded mb-6">Login with Google</button>
          <button class="block w-64 py-4 px-6 bg-blue text-white shadow-md hover:shadow-lg rounded">Login with Facebook</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
