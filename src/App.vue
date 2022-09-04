<template>
<div class="bg-blue-100 h-screen w-screen flex items-center">
  <div class="flex flex-col bg-gray-100 w-9/12 h-4/6 m-auto  rounded-3xl pt-2 pl-2">
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