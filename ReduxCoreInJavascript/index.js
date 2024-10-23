const redux = require('redux')
const createStore  = redux.createStore;


const initialValue = {
     chocolate :  27
}

function buy_chocolate(){
    return {
        type:'CHOCOLATE'
    }
}


function chocoReducer(state=initialValue,action){
   switch(action.type){
    case  'CHOCOLATE':{
       
       return {...state,chocolate:state.chocolate-1}
    }
    default : {
        return state
    }
   
   }
}

const store = createStore(chocoReducer)

console.log('before:',store.getState())
store.dispatch(buy_chocolate())
store.dispatch(buy_chocolate())
console.log('after:',store.getState())


