import React from 'react'
import Todo from '../../Components/Todo/Todo'
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
     {/* <Outlet/> */}
     <Todo/>
    </>
  )
}
