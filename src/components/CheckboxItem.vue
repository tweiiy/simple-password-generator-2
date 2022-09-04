<template>
  <div class="flex flex-row items-center space-x-3">
    {{type}}
    <slot />
  </div>
</template>

<script>
export default {
  props:{
    type:String
  }
}
</script>