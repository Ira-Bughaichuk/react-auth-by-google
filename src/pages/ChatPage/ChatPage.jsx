import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ref, set, onValue } from "firebase/database";
import { nanoid } from 'nanoid';
import { UserContext } from './../../Components/UserContext/UserContext';
import { database } from './../../services/firebase.config';

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]); // Додали стан для збереження повідомлень

 

  useEffect(() => {
    if (!user) {
      return <Navigate to="/" replace />;
    }

    const messageRef = ref(database, 'messages');
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesArray = Object.values(data);
        setMessages(messagesArray);
      }
    });
  }, [user]);

  const sendMessage = (e) => {
    e.preventDefault();
      set(ref(database, 'messages/' + nanoid(10)), {
        username: user.user.displayName,
        email: user.user.email,
        message: message,
      });
      setMessage("");
    
  }

  return (
    <>
      <div>ChatPage</div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button>Send</button>
      </form>
      <ul>
        {messages.map((messageItem, index) => (
          <li key={index}>
            <strong>{messageItem.username}:</strong> <span>{messageItem.email}</span>
            <p>{messageItem.message}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
