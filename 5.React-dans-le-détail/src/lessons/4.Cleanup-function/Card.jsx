import { useState, useEffect } from "react";
import "./Card.css"

function Card() {
  // 1.State :
  const [state, setState] = useState(0);

//   2.Comportement :

useEffect(()=> {
    console.log("Effet");
    return () => console.log("Fonction de nettoyage");
})

// 3.Render:
  return (
    <div className="card">
      <p>Voici la card et son state {state}</p>
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  );
}

export default Card;
