<template>
  <div class="container mx-auto pt-8">
    <h3 class="font-medium mb-4">Club members <span class="bg-green rounded-full px-4 text-white">7</span></h3>
    <div class="bg-white rounded overflow-hidden shadow px-4 mb-4">
      <table class="w-full min-w-full rounded">
        <thead>
          <th class="p-4 bg-white border-b-2 border-grey-light text-left font-medium">Name</th>
          <th class="p-4 bg-white border-b-2 border-grey-light text-left font-medium">Program & Year</th>
          <th class="p-4 bg-white border-b-2 border-grey-light text-left font-medium">Twitter Handle</th>
        </thead>
        <tbody>
          <tr v-for="n in 7" :key="n">
            <td class="px-4 py-3 border-b border-grey-lighter text-left">
              <div class="flex items-center">
                <div class="h-8 w-8 rounded-full overflow-hidden mr-2">
                  <img class="h-full w-full bg-grey">
                </div>
                <div class="flex flex-col">
                  <span class="font-medium ">Kudakwashe</span>
                  <span class="text-grey-dark">President</span>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 border-b border-grey-lighter text-left">
              <div class="flex flex-col">
                <span class="font-medium ">Sofware Engineering</span>
                <span class="text-grey-dark">2.1</span>
              </div>
            </td>
            <td class="px-4 py-3 border-b border-grey-lighter text-left">
              <a href="https://twitter.com/kudapara" target="_blank" class="text-green no-underline">@kudapara</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
