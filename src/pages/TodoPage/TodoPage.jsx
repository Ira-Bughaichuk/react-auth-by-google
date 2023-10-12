import React from 'react'
import TodoList from '../../Components/TodoList/TodoList'
import { Navigate, Outlet} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../../Components/UserContext/UserContext';


export default function TodoPage() {
  const {user} = useContext(UserContext);
  if(!user){
    return <Navigate to="/" replace/>
  }
  return (
    <>
     <h2>TodoPage</h2>
     <Outlet/>
     <TodoList/>
    </>
  )
}
