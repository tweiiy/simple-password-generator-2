<template>
  <div class="flex flex-col space-y-2">
    <CheckboxItem type="numbers"> <!-- ЦИФРЫ -->
      <input type="checkbox" class="h-5 w-5 ml-3" @change="chcngeNumbers">
      <span class="border-2 border-orange-400 rounded-lg bg-purple-300">
        {{numb}}
      </span>
    </CheckboxItem>
    <CheckboxItem type="letters"> <!-- БУКВЫ -->
      <input type="checkbox" class="h-5 w-5 ml-3" @change="chcngeLetters">
      <span class="border-2 border-orange-400 rounded-lg bg-purple-300">
        {{letters}}
      </span>
    </CheckboxItem>
    <CheckboxItem type="upper/lower case"> <!-- РЕГИСТР -->
      <input type="checkbox" class="h-5 w-5 ml-3" @change="chcngeLettersCase">
    </CheckboxItem>
    <CheckboxItem type="symbols"> <!-- СИМВОЛЫ -->
      <input type="checkbox" class="h-5 w-5 ml-3" @change="chcngeSymbols">
      <span class="border-2 border-orange-400 rounded-lg bg-purple-300">
        {{symb}}
      </span>
    </CheckboxItem>
    <div class="pt-2">
      <input type="text" placeholder=" lenght" class="outline-none border-2 border-gray-900" v-model="lengthVal">
    </div>
  </div>
</template>

<script>
import CheckboxItem from './CheckboxItem.vue'
import {mapMutations} from 'vuex'

export default {
  components:{
    CheckboxItem
  },
  methods:{
    ...mapMutations(['chcngeNumbers', 'chcngeLetters', 'chcngeLettersCase', 'chcngeSymbols'])
  },
  data() {
    return {
      numb: '0 1 2 3 4 5 6 7 8 9',
      letters: 'q w e r t y u i o p a s d f g h j k l z x c v b n m',
      symb: "~ ! # № $ % ^ & ? * - _ ( ) = + / . ` ' \" ; : [ ] { } < >",
      lengthVal:''
    }
  },
  watch:{
    lengthVal(){
      this.$store.commit('changeLength',this.lengthVal.length)
    }
  }
}
</script>