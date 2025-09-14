import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./variables.css";
// @ts-ignore
import Background from "./Background.jsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <Background />
      <App />
    </BrowserRouter>
  );
} else {
  throw new Error("Root element with id 'root' not found.");
}
