import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import React from "react";
import { auth } from "../firebase";

const SignIn = () => {
  function signInWithGoogle() {
    //   Googleの認証
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログイン</Button>
    </div>
  );
};

export default SignIn;
