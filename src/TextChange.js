import { useState } from "react";

export default function TextChange() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Text Changer</h1>
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <br />
      <span>{text}</span>
    </div>
  );
}
