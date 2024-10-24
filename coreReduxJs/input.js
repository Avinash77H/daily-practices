const redux = require("redux");
const createStore = redux.createStore;
const {combineReducers} = require('redux')
const {applyMiddleware} = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const initialValue = {
  chocolate: 10,
  cake: 10,
};

function chocolate() {
  return {
    type: "CHOCOLATE",
  };
}

function cake() {
  return {
    type: "CAKE",
  };
}

function chocoReducer(state = initialValue, action) {
  switch (action.type) {
    case "CHOCOLATE":
      return { ...state, chocolate: state.chocolate - 1 };
    case "ICE_CREAM":
      return { ...state, ice_cream: state.ice_cream - 1 };
    default:
      return state;
  }
}

const cakeReducer = (state = initialValue,action)=>{
  switch(action.type){
    case 'CAKE':
      return {...state,cake:state.cake - 1}

    default:
      return state
  }
}

const rootReducer = combineReducers({
  chocoReducer,
  cakeReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

store.dispatch(cake())
store.dispatch(chocolate())
console.log(store.getState())