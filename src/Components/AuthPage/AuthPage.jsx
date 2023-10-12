import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "./../UserContext/UserContext";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.config";

const provider = new GoogleAuthProvider();


export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);


  const { setUser } = useContext(UserContext);
  //console.log(user);

  const authByGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      //console.log(data);
      setUser(data);
    } catch (error) {
      alert(error);
    }
  };
  const authUserByForm = async()=>{
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      console.log("authUserByForm", data);
      setUser(data);
    } catch (error) {
      alert(error);
    }
  }
  const loginUserByForm = async()=>{
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log("loginUserByForm", data);
      setUser(data);
    } catch (error) {
      alert(error);
    }
  }
  const resetForm =()=>{
    setEmail("");
    setPassword("");
    setChecked(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
     authUserByForm();
    //loginUserByForm()
    resetForm()
  };
 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required value={email}
          onChange={(e) => setEmail( e.target.value) }/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required value={password}
          onChange={(e) => setPassword( e.target.value )}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required checked={checked}
          onChange={(e) => setChecked(e.target.checked )}/>
      </Form.Group>
      <Button variant="primary" type="submit" className="me-2"  onClick={authUserByForm}>
        Auth by E-mail
      </Button>
      <Button variant="primary" type="submit" className="me-2" onClick={loginUserByForm}>
        Log in E-mail
      </Button>
      <Button variant="primary" type="button" onClick={authByGoogle}>
        Sig in by Google
      </Button>
    </Form>
  );
}
