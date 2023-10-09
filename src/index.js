import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const provider = new AuthProvider(
  "xar_dev_19527cdf585cd31d0bd06bfc1b008accea781404",
  { 
    network: "dev",
    theme: "dark",
    connectOptions: {
      compact: true
    },
    chainConfig: {
      chainId: "80001"
    }
  }
); //See SDK Reference Guide for optional parameters

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
