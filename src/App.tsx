import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [wolf, setWolf] = useState("right");
  const [sheep, setSheep] = useState("right");
  const [cabbage, setCabbage] = useState("right");
  const [count, setCount] = useState(0);
  const [game, setGame] = useState("playing")

  const items = ["wolf", "sheep", "cabbage"];

  const toTheRight = (item: string) => {
    if (item === "wolf") {
      setWolf("right")
    } else if (item === "sheep") {
      setSheep("right")
    } else {
      setCabbage("right")
    }
    setCount(count + 1);
  }
  const toTheLeft = (item: string) => {
    if (item === "wolf") {
      setWolf("left")
    } else if (item === "sheep") {
      setSheep("left")
    } else {
      setCabbage("left")
    }
    setCount(count + 1);
  }

  useEffect(() => {
    if (wolf === sheep && wolf !== cabbage){
      alert("Ah, you failed...")
    }else if(sheep === cabbage && sheep !== wolf){
      alert("Ah, you failed...")
    }else if(wolf === "left" && sheep === "left" && cabbage === "left") {
      alert("Congratulations!")
    }
  }, [wolf, sheep, cabbage])

  return (
    <>
      {items.map(item => (
        <p>
          {item}
          <span>
            <button onClick={() => toTheRight(item)} >To the Right</button>
            <button onClick={() => toTheLeft(item)}>To the Left</button>
          </span>
        </p>
      ))}

      <p>wolf: {wolf}</p>
      <p>sheep: {sheep}</p>
      <p>cabbage: {cabbage}</p>
      <p>{count}</p>
    </>
  )
}

export default App;
