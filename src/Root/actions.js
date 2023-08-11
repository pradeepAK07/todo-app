import axios from "axios";

export const deleteData = () => {
  return {
    action: "DELETE_DATA",
  };
};

export const addData = () => {
  return async (dispatch, getstate) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const Data = await response.data;
      return dispatch({
        action: "ADD_DATA",
        payload: Data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
