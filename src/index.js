import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const provider = new AuthProvider(
  //"xar_test_d24f70cd300823953dfa2a7f5b7c7c113356b1ad" //dev testnet
  //wallet address
  //"xar_dev_19527cdf585cd31d0bd06bfc1b008accea781404"
  //wallet address 0xD12E6864A0f0f3Ea886400Ae7570E4341889bDa9
  "xar_dev_5fd5338ee82834d59eee58f37b676bdabdfa41e9"
); //See SDK Reference Guide for optional parameters

root.render(
  <StrictMode>
    <ProvideAuth provider={provider}>
      <App />
    </ProvideAuth>
  </StrictMode>
);
