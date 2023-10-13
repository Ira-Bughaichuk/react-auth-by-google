import React, { useMemo, useState } from "react";
import Navigation from "../Navigation/Navigation";

import { Link, Outlet } from "react-router-dom";
import useLS from "../../hooks/useLS";
import TodoSelect from "./../TodoSelect/TodoSelect";
import TodoList from "./../TodoList/TodoList";

export const TYPES_TODO = { done: "DONE", undone: "NOT_DONE", all: "ALL" };

export default function Todo() {
  const [todos, setTodos] = useLS("KeyTodosList", []);
  const [type, setType] = useState(TYPES_TODO.all);

  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const onCheck = (id) => {
    setTodos(
      todos.map((item) =>
        id === item.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  
  const changeType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  const cashSortedTodos = useMemo(() => {
    if (TYPES_TODO.all === type) return todos;
    if (TYPES_TODO.done === type) return todos.filter((item) => item.isDone);
    if (TYPES_TODO.undone === type) return todos.filter((item) => !item.isDone);
  }, [todos, type]);

  return (
    <>
    <p>Todo</p>
      <Navigation />
      <Link to="add" state={{ name: "dddd" }}>Add Todo Form</Link>

      <TodoSelect changeType={changeType} />
      <TodoList todos={cashSortedTodos} onCheck={onCheck} />
      <Outlet />
    </>
  );
}

{
  /* <div>TodoList</div>
      <ul>
        <li  key={id1}>One  <Link to={`delete/${id1}`}>Delete</Link></li>
        <li key={id2}>Two  <Link to={`delete/${id2}`}>Delete</Link></li>
        <li key={id3}> First <Link to={`delete/${id3}`}>Delete</Link></li>
      </ul>  */
}
