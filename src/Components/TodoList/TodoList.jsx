import React from "react";
import Navigation from '../Navigation/Navigation';

import {Link} from 'react-router-dom';
const id1 = "123";
const id2 = "124";
const id3 = "125";
export default function TodoList() {

function onAddTodo(){
    //console.log("onAddTodo");
  }

  return (
    <>
      <Navigation />
      <Link to="add" state={{ name: "dddd"}}>Add Todo Form</Link>
      <div>TodoList</div>
      <ul>
        <li  key={id1}>One</li>
        <li key={id2}>Two</li>
        <li key={id3}> First
          <Link to={`delete/${id3}`}>Delete</Link>
          </li>
      </ul>
    </>
  );
}
