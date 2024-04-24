import { useState } from "react";
import Card from "./Card";

export default function Container() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <h1>Cleanup function</h1>
      <button onClick={()=> setShowCard(!showCard)}>{showCard ? "Cacher la card" : "Afficher la card"}</button>
      {showCard && <Card />}
    </>
  );
}
