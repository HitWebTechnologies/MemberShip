<template>
  <div class="border-t-4 border-green h-screen sm:flex sm:justify-center sm:items-center">
    <div class="form-area mx-auto bg-white rounded p-6">
      <h3 class="mb-6 pb-4 font-light text-2xl border-b">Congratulations!</h3>
      <p>Well done. You have successfully submited your personal details.</p>
      <p>Now whats left is for you to verify your account and add login details.</p>
      <p >A verification link has been sent to <strong>h170167f@hit.ac.zw</strong>. Click on it and you will be a verified member of the club </p>


      <div class="bg-green-lightest border border-green rounded p-4 mt-6">
        <h5 class="mb-2">Just in case you did not now</h5>
        <p>The school created Gmail accounts for all of you which you can log into using your regnumbers in this format [regnumber]@hit.ac.zw.</p>
        <p>So head over to <a href="https://gmail.com">gmail.com</a> and login to access your verification link.</p>
        <p>If you are still not sure about what to do you can <a href="https://twitter.com/HitWebTech">send us a tweet</a> or <router-link to="/contact">contact us</router-link></p>
      </div>
      <div class="flex flex-wrap items-center justify-between mt-6">
        <a href="https://twitter.com/HitWebTech" class="w-full sm:w-auto no-underline bg-green hover:bg-green-dark rounded text-white text-center px-6 py-4">Follow @HitWebTech</a>
        <p class="mt-6 sm:mt-0"> You are free to close this tab</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .form-area {
    max-width: 600px;
  }
</style>
