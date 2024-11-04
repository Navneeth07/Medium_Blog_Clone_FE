import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { GoogleOAuthProvider } from "@react-oauth/google"
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <GoogleOAuthProvider clientId="881466056576-4usuv4pm9v1rrmr3bf9ibdbohihdn4g0.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
