import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "...",
      message: "Whats up",
      timestamp: 1231234243,
    },
    {
      name: "Ellen",
      image: "...",
      message: "Hows it going!",
      timestamp: 1231234213,
    },
    {
      name: "Ellen",
      image: "...",
      message: "Hows it going?",
      timestamp: 1231234249,
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input, timestamp: Date.now() }]);
    setInput("");
    setTimeout(() => {
      window.scrollBy(0, -100);
    }, 0);
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 01/26/24
      </p>
      <div className="chatsContainer">
        {messages.map((message) =>
          message.name ? (
            <div className="chatScreen__message" key={message.timestamp}>
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message" key={message.timestamp}>
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        )}
      </div>
      <div className="chatScreen__input">
        <form onSubmit={handleSend} className="chatform">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button type="submit" className="chatScreen__inputButton">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
