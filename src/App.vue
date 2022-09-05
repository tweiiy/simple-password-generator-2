<template>
<div class="bg-gray-500 h-screen w-screen flex items-center">
  <div class="flex flex-col bg-white bg-opacity-90 w-9/12 h-5/6 m-auto rounded-3xl pt-12 px-8">
    <Params />
    <Output />
  </div>
</div>
</template>

<script>
import Params from './components/TheParams.vue'
import Output from './components/TheOutput.vue'

export default {
  components:{
    Params,
    Output
  }
}
</script>