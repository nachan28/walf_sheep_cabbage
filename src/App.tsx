import { useEffect, useState } from 'react';
import './App.css';
import { Boat } from './components/Boat';
import { LeftSideItems } from './components/LeftSideItems';
import { RightSideItems } from './components/RightSideItems';
import { River } from './components/River';
import { useAppState } from './AppStateContext';

export type Location = "right" | "left" | "onboat"
export type BoatLocation = "right" | "left"

export type Locations = {
  wolf: Location
  sheep: Location
  cabbage: Location
}

function App() {
  const { selectedItem, setSelectedItem, locations, setLocations } = useAppState();
  const [boatLocation, setBoatLocation] = useState<BoatLocation>("right");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isGameWon(locations)) {
      alert("Congratulations! You won!");
    }
    console.log("locations changed!")
  }, [locations])

  const handleGo = () => {
    setBoatLocation(boatLocation === "right" ? "left" : "right")
    setCount(prev => prev + 1)
  }

  const onMoveComplete = () => {
    const gameOverMessage = isGameOver(locations)
    if (gameOverMessage) {
      alert(gameOverMessage)
    }
    if (selectedItem) {
      setLocations((prev: Locations) => ({ ...prev, [selectedItem.type]: boatLocation }));
    }
    console.log(selectedItem)
    setSelectedItem(null);
  }



  const handleReset = () => {
    setLocations({
      wolf: "right",
      sheep: "right",
      cabbage: "right",
    });
    setSelectedItem(null);
    setBoatLocation("right");
    setCount(0);
  }

  const isGameOver = (locations: Locations) => {
    if (locations.wolf === locations.sheep && boatLocation !== locations.wolf) {
      return "The wolf ate the sheep!";
    }
    if (locations.sheep === locations.cabbage && boatLocation !== locations.sheep) {
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
    .map(([key]) => key) as ("wolf" | "sheep" | "cabbage")[];

  const rightItems = Object.entries(locations)
    .filter(([key, value]) => value === "right")
    .map(([key]) => key) as ("wolf" | "sheep" | "cabbage")[];

  return (
      <River>
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            width: "100vw",
            height: "100vh"
          }}>
            <LeftSideItems items={leftItems}></LeftSideItems>
            <RightSideItems items={rightItems}></RightSideItems>
            <div style={{
              display: "flex",
              height: "100vh",
              alignItems: "center"
            }}>
              <Boat boatLocation={boatLocation} onMoveComplete={onMoveComplete}></Boat>
            </div>
            <div style={{
              display: "flex",
              height: "300px",
              justifyContent: "center",
              alignItems: "center",
              gap: "100px"
            }}>
              <h1>{count}times</h1>
              <button onClick={() => handleGo()} style={{
                width: "200px",
                fontSize: "40px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "10px",
                padding: "30px 0px",
                backgroundColor: "#2D7BFF",
                boxShadow: "10px 5px 5px gray",
                color: "white"
              }}>GO!</button>
              <button onClick={() => handleReset()} style={{
                width: "200px",
                fontSize: "40px",
                border: "none",
                borderRadius: "10px",
                padding: "30px 20px",
                backgroundColor: "aliceblue",
                boxShadow: "10px 5px 5px gray",
              }}>Reset</button>
            </div>
            <p>{locations.cabbage}</p>
            <p>selectedItem: {selectedItem && selectedItem.type}</p>
          </div>
      </River>
  )
}

export default App;
