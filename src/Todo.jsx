import { useState } from "react";
export default function Todo() {
  const [text, setText] = useState("");
  function InputField(event) {
    setText(event.target.value);
  }
  function AddTodo() {
    setText(text);
  }
  return (
    <div>
      <input type="text" onChange={InputField} />
      <button onClick={AddTodo}>Add</button>
      <span>{(onClick = { AddTodo }) ? text : " "}</span>
    </div>
  );
}
