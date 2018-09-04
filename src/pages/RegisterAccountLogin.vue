<template>
  <div class="border-t-4 border-green h-screen flex justify-center items-center">
    <div class="container mx-auto py-8">
      <div class="form-area mx-auto lflex bg-white p-6 rounded">
      <h3 class="mb-6 pb-4 font-light text-2xl border-b">Signup the way you want</h3>
        <!-- social Signup
        comment it out. we dont need it yet.
        <div class="w-full flex items-center justify-between pb-4 border-b mb-6">
          <button class="block w-1/2-almost py-4 px-6 bg-white text-blue border-2 hover:bg-grey-lightest rounded">Signup with Google</button>
          <button class="block w-1/2-almost py-4 px-6 bg-blue text-white border-2 border-transparent hover:bg-blue-dark rounded">Signup with Facebook</button>
        </div>
         -->
        <!-- manual Signup -->
        <div>
          <div class="mb-6">
            <label for="username" class="block mb-2 font-medium">Enter your username</label>      
            <input id="username" name="username" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="JohnDoe">
          </div>

          <div class="mb-6">
            <label for="password" class="block mb-2 font-medium">Enter your password</label>      
            <input id="password" name="password" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="***">
          </div>

          <div class="mb-6">
            <label for="confirmPassword" class="block mb-2 font-medium">Confirm your password</label>      
            <input id="confirmPassword" name="confirmPassword" type="text" class="w-full bg-white p-3 rounded border-2 border-grey-light" placeholder="***">
          </div>

          <button class="block w-full py-4 px-6 bg-green text-white hover:bg-green-dark rounded">Create my account</button>
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
