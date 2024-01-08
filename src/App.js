import React from "react";
import TinderCards from "react-tinder-card";
import Chats from "./Chats";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <>
                <Header backButton="/chat" />
                <Chats />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards>
                  <div>test</div>
                </TinderCards>
                <SwipeButtons />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
