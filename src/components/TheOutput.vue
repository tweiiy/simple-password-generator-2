<template>
  <div class="mt-12 flex flex-col items-center space-y-3">
    <div class="flex flex-row space-x-4">
      <button class="bg-gray-300 w-20 border-2 border-gray-900 rounded-md" @click="generate">
        generate
      </button>
      <button class="bg-gray-300 w-12 border-2 border-gray-900 rounded-md">
        copy
      </button>
    </div>
    <span class="text-purple-600 font-semibold text-lg pb-1">
      {{this.$store.state.password}}
    </span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods:{
    ...mapMutations(['generate']),
  }
}
</script>