import React from 'react'
import { useContext } from 'react';
import { UserContext } from './../../Components/UserContext/UserContext';
import { Navigate } from 'react-router-dom';

export default function ChatPage() {
  const {user} = useContext(UserContext);
  if(!user){
    return <Navigate to="/" replace/>
  }
  return (
    <div>ChatPage</div>
  )
}
