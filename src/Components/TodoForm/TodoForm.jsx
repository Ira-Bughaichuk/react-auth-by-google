import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useLS from '../../hooks/useLS';

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useLS('Key-Todos-List', []);

  const location  = useLocation();
  //console.log(location.state);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setTodos([...todos, {title, description}]);
    setTitle("");
    setDescription("");
  }
  return (
    <WrapModal>
    <div>Todo form</div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} placeholder="Enter title" required onChange={(e)=> setTitle(e.target.value)}/>
      <input type="text" value={description} placeholder="Enter description" required onChange={(e)=> setDescription(e.target.value)}/>
      <button type="submit">Add todo</button>
    </form>
    </WrapModal>
    
  )
}
const WrapModal = styled.div`
  width: 300px;
  height: 200px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid black;
  text-align:center;
`;
