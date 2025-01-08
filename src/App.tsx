import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
      <Greeting name="Platen"/>
      <UserProfile  />
    </>
  );
}

export default App;
