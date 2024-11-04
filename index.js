import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { GoogleOAuthProvider } from "@react-oauth/google"
import "./index.css";
import { clientId } from "./src/utils/env";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);
