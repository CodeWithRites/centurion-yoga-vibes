import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";
import App from "./App";

/* 🔓 FORCE SCROLL UNLOCK (MOBILE FIX) */
function ScrollUnlock() {
  useEffect(() => {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.overflowX = "hidden";

    // iOS / Android momentum scroll fix
    document.body.style.webkitOverflowScrolling = "touch";
  }, []);

  return null;
}

// Increment visitor count
const currentCount = parseInt(localStorage.getItem("visitorCount") || "0");
localStorage.setItem("visitorCount", (currentCount + 1).toString());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollUnlock />
      <App />
    </BrowserRouter>
  </StrictMode>
);