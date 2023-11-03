import "./styles.css";
import React from "react";
import { Auth, useAuth } from "@arcana/auth-react";

export default function App() {
 const { loading, isLoggedIn, connect, user  } = useAuth()
  const onConnectClick = async () => {
    try {
      /* Pnp login UI */
      await connect();
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return (
      <div className="App">
        <h1>Sample Auth React App PNP Login</h1>
        <Auth/>
      </div>
    );
  }
  else {
    console.log("User Info:", user);
  }
}
