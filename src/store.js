import Vuex from 'vuex'

export default new Vuex.Store({
  mutations:{
    chcngeNumbers(state){
      state.numbers.isActive=!state.numbers.isActive
    },
    chcngeLetters(state){
      state.letters.isActive=!state.letters.isActive
    },
    chcngeLettersCase(state){
      state.letters.isUpper=!state.letters.isUpper
    },
    chcngeSymbols(state){
      state.symbols.isActive=!state.symbols.isActive
    },
    changeLength(state,length){
      state.length=length
    }
  },
  state: {
    numbers:{
      isActive:false,
      value:['0','1','2','3','4','5','6','7','8','9']
    },
    letters:{
      isActive:false,
      isUpper:false,
      value:['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    },
    symbols:{
      isActive:false,
      value:['`','~','!','#','№','$','%','^','&','?','*','-','_','(',')','=','+','/','\\','.',"'",'"',';',':','[',']','{','}','<','>']
    },
    length: 0
  }
})