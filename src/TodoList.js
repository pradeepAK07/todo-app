import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchTodoData } from "./todoActions";

const TodoList = ({ fetchTodoData, todoList }) => {
  useEffect(() => {
    fetchTodoData();
  }, []);
  console.log(todoList);
  return (
    <div>
      {todoList.todos.map((items) => {
        return <p>{items.title}</p>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodoData: () => dispatch(FetchTodoData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
