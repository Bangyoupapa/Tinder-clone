import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { getPeople } from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    // {
    //   name: "steve jobs",
    //   url: "https://zh.wikipedia.org/zh-tw/史蒂夫·乔布斯#/media/File:Steve_Jobs_Headshot_2010-CROP_(cropped_2).jpg",
    // https://zh.wikipedia.org/zh-tw/%E5%9F%83%E9%9A%86%C2%B7%E9%A9%AC%E6%96%AF%E5%85%8B
    // },
    // {
    //   name: "mark zuckerburg",
    //   url: "https://media.vanityfair.com/photos/5f1b08fd154906605854d34c/master/pass/Zuck734.jpg",
    // },
  ]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    getPeople().then((data) => {
      setPeople(data);
    });
  }, []);
  //Bad
  //  const people = []
  //  people.push('sonny', 'qazi')

  // Good (Push to an array in REACT
  // setPeople([...people, 'sonny', 'qazi'])

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div className="card-wrapper">
              <img src={person.url} className="card-photo"></img>
              <h3 className="card-name">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
