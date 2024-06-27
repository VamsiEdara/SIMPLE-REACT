import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import TextChange from "./TextChange";
import Todo from "./Todo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App />
    <br />
    <TextChange /> */}
    <Todo />
  </StrictMode>
);
