import "./styles.css";
import React from "react";
import { Auth } from "@arcana/auth-react";
//import { Auth, useAuth } from "@arcana/auth-react";
import { Button } from "./components";
import styled from "styled-components";

export default function App() {
 /*  Default Login Modal *
 /*
  return (
    <div className="App">
      <h1>Sample Auth React App</h1>
      <Auth />
    </div>
  );
 */

// const { loading, isLoggedIn, connect, user, loginWithSocial } = useAuth()
//  /*
//  const onConnectClick = async () => {
//    try {
//      /* Pnp login UI */
//      /*
//      await connect();
//      */
//      /* Custom login UI */
//      await loginWithSocial('google');
//    } catch (err) {
//      console.log({ err });
//      // Handle error
//    }
//  };

//  if (loading) {
//    return <p>Loading...</p>;
//  }
//  if (!isLoggedIn) {
//    return (
//      <div className="App">
//        <h1>Sample Auth React App</h1>
//        <button onClick={onConnectClick}>
//          Connect via Google
//        </button>
//      </div>
//    );
//  }
//  */

  const [theme, setTheme] = React.useState("light");
  const [externalWallet, showExternalWallet] = React.useState(false);
  return (
    <div>
      <Auth theme={"light"} />
    </div>
  );
}
