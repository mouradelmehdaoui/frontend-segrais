import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/main.scss";

function App() {
  const token = useSelector(state => state.auth.token);
  return token ? <Dashboard /> : <Login />;
}

export default App;
