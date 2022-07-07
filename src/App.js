import "./App.css";
import SignIn from "./components/SignIn";
import { auth } from "./firebase";
import Line from "./components/Line";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Line /> : <SignIn />}</div>;
}

export default App;
