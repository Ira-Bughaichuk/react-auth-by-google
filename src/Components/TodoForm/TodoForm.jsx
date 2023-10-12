import React from 'react'
import { useLocation } from "react-router-dom";

export default function TodoForm() {
  const location  = useLocation();
  console.log(location.state);
  return (
    <div>TodoForm</div>
  )
}
