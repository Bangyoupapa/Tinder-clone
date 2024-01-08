import React from "react";
import "./Chats.css";

const Chat = () => <div>chat</div>;

function Chats({ name, message, profilePic }) {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
