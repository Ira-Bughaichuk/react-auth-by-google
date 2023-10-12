import { useContext } from "react";
import AuthPage from "./pages/AuthPage/AuthPage";
import TodoList from "./Components/TodoList/TodoList";
import { UserContext } from "./Components/UserContext/UserContext";

import RouterApp from "./Components/RouterApp/RouterApp";

function App() {
  //const { user } = useContext(UserContext);
return(
  <RouterApp>

  </RouterApp>
)
  // without Routers
  // return <>{user ? <TodoList /> : <AuthPage />}</>;
}

export default App;
