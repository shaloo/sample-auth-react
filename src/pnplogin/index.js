import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const provider = new AuthProvider(
  "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063",
  { 
    network: "mainnet",
    theme: "light",
    connectOptions: {
      compact: true,
    },
    chainConfig: {
      chainId: "80001"
    }
  }
); //See https://auth-react-sdk-ref-guide.netlify.app/ for Auth-React SDK Reference Guide

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
