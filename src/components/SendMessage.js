import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const SendMessage = () => {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    //再レンダリングを止める　Enter押すと再読み込みされる
    e.preventDefault();

    //Googleアカウントのユーザー情報
    const { uid, photoURL } = auth.currentUser;
    //データを格納
    db.collection("messages").add({
      sendTime: firebase.firestore.FieldValue.serverTimestamp(),
      text: message,
      photoURL,
      uid,
    });
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="メッセージを入力"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <SendIcon />
        </div>
      </form>
    </div>
  );
};
