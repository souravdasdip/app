import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useAppStore } from "./services/AuthContext";

function App() {
  const { currentUser } = useAppStore();

  return currentUser ? <Dashboard /> : <Login />;
}

export default App;
