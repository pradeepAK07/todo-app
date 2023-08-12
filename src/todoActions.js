import axios from "axios";

export const FETCHTODO = "FETCHTODO";
export const FETCHTODOSUCCESS = "FETCHTODOSUCCESS";
export const FETCHTODOFAILURE = "FETCHTODOFAILURE";

const fetchTodo = () => {
  return {
    type: FETCHTODO,
  };
};

const fetchTodosuccess = (data) => {
  return {
    type: FETCHTODOSUCCESS,
    payload: data,
  };
};

const fetchTodoFailure = (error) => {
  return {
    type: FETCHTODOFAILURE,
    payload: error,
  };
};

export const FetchTodoData = () => {
  return async (dispatch) => {
    dispatch(fetchTodo());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const response = await res.data;
      dispatch(fetchTodosuccess(response));
    } catch (error) {
      dispatch(fetchTodoFailure(error));
    }
  };
};
