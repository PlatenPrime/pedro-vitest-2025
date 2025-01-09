import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import {Greeting} from "./components/Greeting/Greeting";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name="Platen" />
      <Counter />
      <UserProfile userId={3} />
    </>
  );
}

export default App;
