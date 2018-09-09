<template>
  <div class="bg-orange-lightest p-6 mb-4 flex items-center justify-between border-b-4 border-orange-dark" v-if="error.show">
    <div class="text-orange-dark">
      <h3 class="mb-2 font-medium">Error</h3>
      <span>{{ this.error.text }}</span>
    </div>
    <button @click="$emit('clearError')" class="flex-no-shrink ml-4 bg-white text-orange-dark h-10 w-10 rounded shadow">X</button>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>

</style>
