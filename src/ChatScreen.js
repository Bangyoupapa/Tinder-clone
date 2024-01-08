import React, { useState } from "react";

function ChatScreen() {
  const [messages, setMessages] = useState([{}]);
  return (
    <div className="chatScreen">
      <h2>Chat Screen</h2>
    </div>
  );
}

export default ChatScreen;
