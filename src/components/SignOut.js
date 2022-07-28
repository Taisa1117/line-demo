import { Button } from "@mui/material";
import { auth } from "../firebase";
import React from "react";

const SignOut = () => {
  return (
    <div className="header">
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
      <h3>{auth.currentUser.displayName}</h3>
    </div>
  );
};

export default SignOut;
