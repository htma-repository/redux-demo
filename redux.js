import { configureStore } from "@reduxjs/toolkit";

const initState = {
  value: 10,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCRE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    case "DECRE":
      return {
        ...state,
        value: state.value - action.newValue,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

const reduxSubcriber = () => {
  const lastState = store.getState();
  console.log(lastState);
};
store.subscribe(reduxSubcriber);

store.dispatch({ type: "INCRE", newValue: 1 });
store.dispatch({ type: "DECRE", newValue: 1 });
