import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "./../UserContext/UserContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase.config";

const provider = new GoogleAuthProvider();

export default function AuthPage() {
  const { setUser } = useContext(UserContext);
  //console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
  };
  const authByGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      console.log(data);
      setUser(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" className="me-2">
        Submit
      </Button>
      <Button variant="primary" type="button" onClick={authByGoogle}>
        Sig in by Google
      </Button>
    </Form>
  );
}
