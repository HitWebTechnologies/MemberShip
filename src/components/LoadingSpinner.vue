<template>
  <div class="lds-ellipsis">
    <div :style="{ background: color }"></div>
    <div :style="{ background: color }"></div>
    <div :style="{ background: color }"></div>
    <div :style="{ background: color }"></div>
  </div>
</template>

<script>
  export default {
    props: ['color']
  }
</script>

<style scoped>
  .lds-ellipsis {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    min-height: 10px;
  }
  .lds-ellipsis div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 3, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    margin-left: 2px;
    animation: lds-ellipsis1 0.9s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    margin-left: 3px;
    animation: lds-ellipsis2 0.9s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    margin-left: 5px;
    animation: lds-ellipsis2 0.9s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    margin-left: 10px;
    animation: lds-ellipsis3 0.9s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }

</style>
