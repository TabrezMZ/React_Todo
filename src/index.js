import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { TodosProvider, todoContext } from "./contexts/TodoContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { todoContext };

root.render(
  <StrictMode>
    <TodosProvider>
      <Router>
        <App />
      </Router>
    </TodosProvider>
  </StrictMode>
);
