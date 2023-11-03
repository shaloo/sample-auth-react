import "./styles.css";
import React from "react";
import { Auth } from "@arcana/auth-react";

export default function App() {
 /*  Default Login Modal */
  return (
    <div className="App">
      <h1>Sample Auth React App</h1>
      <Auth />
    </div>
  );
}
