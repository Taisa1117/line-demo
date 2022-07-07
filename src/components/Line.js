import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { db, auth } from "../firebase.js";
import { SendMessage } from "./SendMessage";
import SignOut from "./SignOut";

function Line() {
  const scroll = useRef(null);
  useLayoutEffect(() => {
    if (scroll && scroll.current) {
      scroll.current.scrollIntoView();
    }
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ text, photoURL, uid }, index) => (
          <div>
            <div
              key={index}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Line;
