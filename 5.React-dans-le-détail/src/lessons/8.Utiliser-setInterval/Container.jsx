import { useEffect, useState } from "react";

export default function Container() {
  // 1.State:
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      // setCounter(counter + 1); //erreur 
      setCounter(state => state + 1) //passer par une valeur courante pour résoudre le bug
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);
  // 2.Comportement :

  // 3.Render :
  return (
    <div>
      <h1>Valeur du compteur : {counter}</h1>
    </div>
  );
}
