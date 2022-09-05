<template>
  <div class="mt-12 flex flex-col items-center space-y-3">
    <div class="flex flex-row space-x-4">
      <button class="bg-gray-200 w-24 h-12 border-2 border-gray-900 rounded-md px-2 text-xl hover:bg-white" @click="generate">
        generate
      </button>
      <button class="bg-gray-200 w-16 h-12 border-2 border-gray-900 rounded-md px-2 text-xl hover:bg-white" @click="copy">
        copy
      </button>
    </div>
    <span class="text-purple-600 font-semibold text-3xl pb-1 px-20">
      {{this.$store.state.password}}
    </span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods:{
    ...mapMutations(['generate', 'copy']),
  }
}
</script>