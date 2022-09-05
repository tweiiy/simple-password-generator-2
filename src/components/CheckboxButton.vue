<template>
  <button :class="style">
    <div v-if="type=='case'">
      <span v-if="active" class="text-2xl">
        upper 
      </span>
      <span v-else class="text-2xl">
        lower 
      </span>
    </div>
    <span class="text-2xl">
      {{type}}
    </span>
  </button>
</template>

<script>
export default {
  props:{
    type:String,
    active:Boolean
  },
  computed:{
    style(){
      let mainStyles='w-10/12 h-24 border-2 border-gray-900 rounded-md group-hover:bg-white'
      if(!this.active)
        mainStyles+=' bg-red-200'
      else
        mainStyles+=' bg-green-200'
      return mainStyles
    }
  }
}
</script>