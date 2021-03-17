import "./App.css";
import { useState } from "react";
import NumberContext from "./context/NumberContext";
import NumberToggler from "./components/NumberToggler";

function App() {
  const NumberHook = useState(0);
  return (
    <NumberContext.Provider value={NumberHook}>
      <NumberToggler />
      <h1>Welcome</h1>
    </NumberContext.Provider>
  );
}

export default App;
