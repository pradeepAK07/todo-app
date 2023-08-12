import * as actions from "./todoActions";

const initialState = {
  Loading: false,
  todos: [],
  Error: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHTODO:
      return {
        ...state,
        Loading: true,
      };
    case actions.FETCHTODOSUCCESS:
      return {
        Loading: false,
        todos: action.payload,
        Error: "",
      };
    case actions.FETCHTODOFAILURE:
      return {
        Loading: false,
        todos: [],
        Error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
