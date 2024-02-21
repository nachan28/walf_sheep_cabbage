import { useEffect, useState } from 'react';
import './App.scss';
import { Boat } from './components/Boat/Boat';
import { LeftSideItems } from './components/SideItems/LeftSideItems';
import { RightSideItems } from './components/SideItems/RightSideItems';
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
      handleReset()
    }
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
    if (gameOverMessage) {
      handleReset()
    }
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
      <div className="container">
        <LeftSideItems items={leftItems}></LeftSideItems>
        <RightSideItems items={rightItems}></RightSideItems>
        <div className='boat-container'>
          <Boat boatLocation={boatLocation} onMoveComplete={onMoveComplete}></Boat>
        </div>
        <div className='buttons-container'>
          <h1>{count}times</h1>
          <button onClick={() => handleGo()} className='button go-button'>GO!</button>
          <button onClick={() => handleReset()} className='button reset-button'>Reset</button>
        </div>
      </div>
    </River>
  )
}

export default App;
