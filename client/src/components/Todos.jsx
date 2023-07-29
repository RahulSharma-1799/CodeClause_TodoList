import React, { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../redux/actions/type.js";
//component
import Todo from "./Todo.jsx";
import Tabs from "./Tabs.jsx";
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todos;
  });
  const currentTab = useSelector((state) => state.currentTab);
  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line
  }, []);
  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };
  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };
  return (
    <div>
      <article>
        <div>
          <Tabs currentTab={currentTab} />
         
          {todos.some((todo) => todo.done) ? (
            <button className="btn clear" onClick={removeDoneTodos}>
              Remove Done Todos
            </button>
          ) : null}
        </div>
        <ul>
          {getTodos().map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Todos;
