import React, { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import { Boat } from './components/Boat';

type Locations = {
  wolf: string;
  sheep: string;
  cabbage: string;
  boat: string;
}

function App() {
  const [locations, setLocations] = useState({
    wolf: "right",
    sheep: "right",
    cabbage: "right",
    boat: "right",
  })
  const [selectedItem, setSelectedItem] = useState<"wolf" | "sheep" | "cabbage" | null>(null)

  const handleGo = (item: "wolf" | "sheep" | "cabbage" | null) => {
    const newLocations = { ...locations }
    if (item) {
      newLocations[item] = newLocations[item] === "right" ? "left" : "right";
    }
    newLocations.boat = newLocations.boat === "right" ? "left" : "right";

    const gameOverMessage = isGameOver(newLocations);
    if (gameOverMessage) {
      alert(gameOverMessage)
    } else if (isGameWon(newLocations)) {
      alert("Congratulations! You won!")
    }
    setLocations(newLocations);
  }

  const handleReset = () => {
    setLocations({
      wolf: "right",
      sheep: "right",
      cabbage: "right",
      boat: "right",
    });
    setSelectedItem(null);
  }

  const isGameOver = (locations: Locations) => {
    if (locations.wolf === locations.sheep && locations.boat !== locations.wolf && locations.cabbage !== locations.wolf) {
      return "The wolf ate the sheep!";
    }
    if (locations.sheep === locations.cabbage && locations.boat !== locations.sheep && locations.wolf !== locations.sheep) {
      return "The sheep ate the cabbage!"
    }
    return null;
  }

  const isGameWon = (locations: Locations) => {
    if (locations.wolf === "left" && locations.sheep === "left" && locations.cabbage === "left") {
      return true
    }
    return false
  }
  return (
    <>
      <Item onClick={() => setSelectedItem("wolf")} src="/wolf.jpg" type="wolf">{locations.wolf}</Item>
      <Item onClick={() => setSelectedItem("sheep")} src="/sheep.jpg" type="sheep">{locations.sheep}</Item>
      <Item onClick={() => setSelectedItem("cabbage")} src="/cabbage.jpg" type="cabbage">{locations.cabbage}</Item>
      <br />
      <Boat></Boat>
      <p>{locations.boat}</p>
      <br />
      <p>selected: {selectedItem}</p>

      <button onClick={() => handleGo(selectedItem)}>GO!</button>
      <button onClick={() => setSelectedItem(null)}>Select None</button>
      <button onClick={() => handleReset()}>最初から</button>
    </>
  )
}

export default App;
