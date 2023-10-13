import React from "react";
import { Link } from 'react-router-dom';

const id1 = "123";
const id2 = "124";
const id3 = "125";


export default function TodoList({ todos, onCheck }) {
  return (
    <>
      <div>TodoList</div>
      {/* {todos.map(({id, title, description, isDone}) => (<li key={id}>
        <h4>{title}</h4>
        <p>{description}</p>
        <input type="checkbox" checked={isDone} onChange={() => onCheck(id)}/>
        <Link to={`delete/${id}`}>Delete</Link>
      </li>
      ))} */}
      <ul>
        <li key={id1}> One <Link to={`delete/${id1}`}>Delete</Link></li>
        <li key={id2}>Two <Link to={`delete/${id2}`}>Delete</Link></li>
        <li key={id3}>First <Link to={`delete/${id3}`}>Delete</Link></li>
      </ul>
    </>
  );
}
