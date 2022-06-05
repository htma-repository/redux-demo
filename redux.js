import { configureStore } from "@reduxjs/toolkit";

const initState = {
  value: 10,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCR":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    case "DECR":
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

const reduxSubscriber = () => {
  const lastState = store.getState();
  console.log(lastState);
};
store.subscribe(reduxSubscriber);

store.dispatch({ type: "INCR", newValue: 1 });
store.dispatch({ type: "DECR", newValue: 1 });
