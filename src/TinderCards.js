import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url: "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-image.jpg",
    },
    {
      name: "mark zuckerburg",
      url: "https://media.vanityfair.com/photos/5f1b08fd154906605854d34c/master/pass/Zuck734.jpg",
    },
  ]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    //This is where the code runs..
    //this will run ONCE when the component loads, and never again
    const unsubscribe = database
      .collection("People")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      //this is the cleanup...
      unsubscribe();
    };
  }, []);
  //Bad
  //  const people = []
  //  people.push('sonny', 'qazi')

  // Good (Push to an array in REACT
  // setPeople([...people, 'sonny', 'qazi'])

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
