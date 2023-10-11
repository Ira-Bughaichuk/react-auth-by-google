import { useContext } from "react";
import AuthPage from "./Components/AuthPage/AuthPage";
import TodoList from "./Components/TodoList/TodoList";

import { UserContext } from "./Components/UserContext/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return <>{user ? <TodoList /> : <AuthPage />}</>;
}

export default App;
