import React, { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import { Boat } from './components/Boat';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { LeftSideItems } from './components/LeftSideItems';
import { RightSideItems } from './components/RightSideItems';

export type Location = "right" | "left" | "onboat"

export type Locations = {
  wolf: Location
  sheep: Location
  cabbage: Location
  boat: Location
}

function App() {
  const [locations, setLocations] = useState<Locations>({
    wolf: "right",
    sheep: "right",
    cabbage: "right",
    boat: "right",
  })
  // const [selectedItem, setSelectedItem] = useState<"wolf" | "sheep" | "cabbage" | null>(null)
  const [count, setCount] = useState(0);

  const handleGo = () => {
    const newLocations = { ...locations }
    // if (item) {
    //   newLocations[item] = newLocations[item] === "right" ? "left" : "right";
    // }
    newLocations.boat = newLocations.boat === "right" ? "left" : "right";
    setLocations(newLocations)
    setCount(prev => prev + 1)
  }

  const onMoveComplete = () => {
    const gameOverMessage = isGameOver(locations)
    if (gameOverMessage) {
      alert(gameOverMessage)
    }
    if (isGameWon(locations)) {
      alert("Congratulations! You won!");
    }
    // setSelectedItem(null);
  }



  const handleReset = () => {
    setLocations({
      wolf: "right",
      sheep: "right",
      cabbage: "right",
      boat: "right",
    });
    // setSelectedItem(null);
    setCount(0);
  }

  const handleSelectItem = (item: "wolf" | "sheep" | "cabbage" | null) => {
    if (item && locations.boat === locations[item]) {
      // setSelectedItem(item)
    }
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

  // "left" と "right" のアイテムリストを生成
  const leftItems = Object.entries(locations)
    .filter(([key, value]) => value === "left")
    .map(([key]) => key);
  
  const rightItems = Object.entries(locations)
    .filter(([key, value]) => value === "right")
    .map(([key]) => key);
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{display: "flex", justifyContent:"space-around", flexDirection: "column"}}>
        <Boat locations={locations}></Boat>
        <LeftSideItems items={leftItems}></LeftSideItems>
        <RightSideItems items={rightItems}></RightSideItems>
      </div>
      <p>{locations.boat}</p>
      {/* <p>selected: {selectedItem}</p> */}
      <p>{count}times</p>

      <button onClick={() => handleGo()}>GO!</button>
      {/* <button onClick={() => setSelectedItem(null)}>Select None</button> */}
      <button onClick={() => handleReset()}>最初から</button>
    </DndProvider>
  )
}

export default App;
