<template>
  <div class="flex flex-row space-x-6 items-center justify-center w-full">
    <div class="flex flex-row items-center space-x-3 relative group w-full"> <!-- ЦИФРЫ -->
      <CheckboxButton type="numbers" :active="this.$store.state.numbers.isActive" @click="chcngeNumbers"/>
      <CharsExample>{{numb}}</CharsExample>
    </div>
    <div class="flex flex-row items-center space-x-3 relative group w-full" relative> <!-- БУКВЫ -->
      <CheckboxButton type="letters" :active="this.$store.state.letters.isActive" @click="chcngeLetters"/>
      <CharsExample>{{letters}}</CharsExample>
    </div>
    <div class="flex flex-row items-center space-x-3 relative group w-full"> <!-- СИМВОЛЫ -->
      <CheckboxButton type="symbols" :active="this.$store.state.symbols.isActive" @click="chcngeSymbols"/>
      <CharsExample>{{symb}}</CharsExample>
    </div>
    <div class="flex flex-row items-center space-x-3 relative group w-full"> <!-- РЕГИСТР -->
      <CheckboxButton type="case" :active="this.$store.state.letters.isUpper" @click="chcngeLettersCase"/>
    </div>
    <div class="flex flex-col">
      <span class="m-auto text-xl">length</span>
      <input type="text" placeholder=" length" class="outline-none border-2 border-gray-900 w-32 text-xl" v-model="lengthVal">
    </div>
  </div>
</template>

<script>
import CheckboxButton from './CheckboxButton.vue'
import CharsExample from './CharsExample.vue'
import {mapMutations} from 'vuex'

export default {
  components:{
    CheckboxButton,
    CharsExample
  },
  methods:{
    ...mapMutations(['chcngeNumbers', 'chcngeLetters', 'chcngeLettersCase', 'chcngeSymbols'])
  },
  data() {
    return {
      numb: '0 1 2 3 4 5 6 7 8 9',
      letters: 'q w e r t y u i o p a s d f g h j k l z x c v b n m',
      symb: "~ ! # № $ % ^ & ? * - _ ( ) = + / . ` ' \" ; : [ ] { } < >",
      lengthVal: this.$store.state.length
    }
  },
  watch:{
    lengthVal(){
      this.$store.commit('changeLength',this.lengthVal)
    }
  }
}
</script>