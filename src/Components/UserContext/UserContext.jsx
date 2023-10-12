import React, { useState, createContext } from "react";
import useLS from "../../hooks/useLS";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useLS("User-Auth-Key", null);
  //const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
