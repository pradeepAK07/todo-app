import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todoList: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
