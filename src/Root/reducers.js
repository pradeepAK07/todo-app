import { combineReducers } from "redux";

const initialState = {
  todoData: null,
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        todoData: action.payload,
      };
    case "DELETE_DATA":
      return initialState;
    default:
      return state;
  }
};

const reducers = combineReducers({
  data: DataReducer,
});

export default reducers;
