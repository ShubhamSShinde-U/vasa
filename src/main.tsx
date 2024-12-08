import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./fonts/fonts.css";
import { config } from "./config/config.ts";
const getEnvData = async () => {
  const request = new XMLHttpRequest();
  request.open("GET", "environment/environment.json", false);
  request.send(null);

  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    for (const [key, value] of Object.entries(response)) {
      config[key] = value;
    }
  }
  console.log(config);
  
};

getEnvData();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
