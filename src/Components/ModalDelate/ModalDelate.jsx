import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useLS from "../../hooks/useLS";

export default function ModalDelate() {
  const todoParams = useParams(); // отримуємо параметр-id який передаємо при кліку на лі
  //console.log(todoParams.id);
const navigate = useNavigate()
   //const [todos, setTodos] = useLS('KeyTodosList', []);

  const handleDelate =()=>{
    // const newTodos = todos.filter(item=> item.id !== todoParams.id);
    // setTodos(newTodos);
    // setTimeout(()=>{ navigate("/todo");}, 400)
  }


  return (
    <WrapModal>
      <div>Open modal for delate by click Li!!!</div>
      <p>Do you want to delete ?</p>
      <Button className="me-2" onClick={handleDelate}>Delete</Button>
      <Link to="/todo"><Button>Cancel</Button></Link> {/* повернемся на шаг назад */}
    </WrapModal>
  );
}
const WrapModal = styled.div`
  width: 300px;
  height: 200px;
  backgroudColor: red;
  padding: 20px;
margin: 0 auto;
  border: 1px solid black;
  text-align:center;
`;
