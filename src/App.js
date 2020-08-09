import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import "./styles.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
//import SendIcon from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, SetInput] = useState("");
  const [messages, SetMessages] = useState([]);
  const [username, SetUsername] = useState("");
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        SetMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    SetUsername(prompt("Enter Your Name"));
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    SetInput("");
  };
  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTebRyQtgHDVfaavy19CsneLMSB91jrSXpSSA&usqp=CAU" />
      <h1>Hello Users</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a Message</InputLabel>
          <Input
            className="app__input"
            placeholder="Enter a message...."
            value={input}
            onChange={(event) => SetInput(event.target.value)}
          />
          <IconButton
            className="app__iconbutton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
