import React, { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';

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

    if (isGameOver(newLocations)) {
      alert("Game over")
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
      return true
    }
    if (locations.sheep === locations.cabbage && locations.boat !== locations.sheep && locations.wolf !== locations.sheep) {
      return true;
    }
    return false;
  }

  const isGameWon = (locations: Locations) => {
    if (locations.wolf === "left" && locations.sheep === "left" && locations.cabbage === "left") {
      return true
    }
    return false
  }
  return (
    <>
      <Item onClick={() => setSelectedItem("wolf")} src="/wolf.jpg">{locations.wolf}</Item>
      <Item onClick={() => setSelectedItem("sheep")} src="/sheep.jpg">{locations.sheep}</Item>
      <Item onClick={() => setSelectedItem("cabbage")} src="/cabbage.jpg">{locations.cabbage}</Item>
      <p>boat: {locations.boat}</p>
      <br />
      <p>selected: {selectedItem}</p>

      <button onClick={() => handleGo(selectedItem)}>GO!</button>
      <button onClick={() => setSelectedItem(null)}>Select None</button>
      <button onClick={() => handleReset()}>最初から</button>
    </>
  )
}

export default App;
