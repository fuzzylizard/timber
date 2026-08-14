import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App.js";

// Find the root element in your Rails view
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("react-root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  }
});
