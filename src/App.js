import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <br />
      <h2>{count}</h2>
      <button style={{ marginRight: "20px" }} onClick={decrement}>
        -
      </button>
      <button onClick={increment}>+</button>
    </div>
  );
}
