const redux = require("redux");
const createStore = redux.createStore;

const initialValue = {
  chocolate: 10,
  ice_cream: 17,
};

function chocolate() {
  return {
    type: "CHOCOLATE",
  };
}

function ice_cream() {
  return {
    type: "ICE_CREAM",
  };
}

function chocoReducer(state = initialValue, action) {
  switch (action.type) {
    case "CHOCOLATE":
      return { ...state, chocolate: state.chocolate - 1 };
    default:
      return state;
  }
}

function cakeReducer(state = initialValue, action){
  switch(action.type){
    case 'CAKE':
      return { ...state, ice_cream: state.ice_cream - 1 };
      default:
        return state;
  }
}

const store = createStore(reducer)

store.dispatch(ice_cream())
store.dispatch(chocolate())
console.log(store.getState())