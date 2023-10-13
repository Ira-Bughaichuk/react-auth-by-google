import React  from 'react';
import { Routes, Route, } from "react-router-dom";

import TodoPage from '../../pages/TodoPage/TodoPage';
import ChatPage from '../../pages/ChatPage/ChatPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import AuthPage from '../../pages/AuthPage/AuthPage';
import TodoForm from './../TodoForm/TodoForm';
import ModalDelate from './../ModalDelate/ModalDelate';


export default function RouterApp() {
  return (
    <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="todo" element={<TodoPage />}>
          <Route path="add" element={<TodoForm />}/>
          <Route path="delete/:id" element={<ModalDelate />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}
