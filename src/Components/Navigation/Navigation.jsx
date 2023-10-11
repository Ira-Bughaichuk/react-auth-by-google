import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { UserContext } from "./../UserContext/UserContext";
import { auth } from "../../services/firebase.config";
import { signOut } from "firebase/auth";

export default function Navigation() {
  const { user, setUser } = useContext(UserContext);

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <h2>{user.fullName}</h2>
      <Button variant="primary" type="button" onClick={logOut}>
        Log Out
      </Button>
    </>
  );
}
