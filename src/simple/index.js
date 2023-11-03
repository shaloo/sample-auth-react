import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const provider = new AuthProvider(
  //"xar_test_87f34a9c7879cd4b726ba36a99e164837d70143a",
  //"xar_dev_19527cdf585cd31d0bd06bfc1b008accea781404",
  //"xar_test_e4d3659937eb066467a047046abfc19e53664543",
  "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063",
  //"xar_test_d24f70cd300823953dfa2a7f5b7c7c113356b1ad",
  { 
   // network: "dev",
    network: "mainnet",
    theme: "light",
    connectOptions: {
      compact: true,
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
