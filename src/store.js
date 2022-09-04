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
    },
    generate(state){
      let allSymbols=[]
      state.password=''
      let randNumb=0
      let randSymb
      if(state.numbers.isActive)
        state.numbers.value.forEach(i=>allSymbols.push(i))
      if(state.letters.isActive)
        state.letters.value.forEach(i=>allSymbols.push(i))
      if(state.symbols.isActive)
        state.symbols.value.forEach(i=>allSymbols.push(i))
      for (let index = 0; index < state.length; index++) {
        randNumb=Math.trunc((Math.random()*67))%allSymbols.length//генерация случайного индекса
        randSymb=allSymbols[randNumb]//выбор символа на основе случайного индекса
        if(state.letters.isUpper&&state.letters.value.includes(randSymb)&&Boolean(Math.trunc(Math.random()*10%2))){
          randSymb=randSymb.toUpperCase()
        }
        state.password+=randSymb
      }
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
    length: 8,
    password: 'password'
  }
})