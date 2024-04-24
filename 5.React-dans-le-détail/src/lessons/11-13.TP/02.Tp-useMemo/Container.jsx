/* Exercice 2 : Utilisation de useMemo
Créez un composant ExpensiveCalculation qui effectue un calcul coûteux lorsqu'une température en Celsius est saisie dans un champ d'entrée. Utilisez useMemo pour éviter de recalculer la conversion en Fahrenheit à chaque rendu. */

import React, { useEffect, useState } from "react";
import Calculation from "./Calculation";

export default function Container() {
  // 1.State:
  const [name, setName] = useState("John Doe");

  useEffect(() => {
    document.title = "Tp - useMemo - ExpensiveCalculation";
  }, []);

  // 2.Behavior:
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const sayHelloTo = () => {
    console.log("Render SayHello !");
    console.log(!name ? `Hello "Anonymous"` : `Hello ${name}`);
  };
  // 3.Render:
  return (
    <>
      <h1>TP - useMemo</h1>
      <Calculation />
      <div className="inputGroup">
        <input type="text" value={name} onChange={handleInputChange} />
        <button onClick={sayHelloTo}>Say Hello</button>
      </div>
    </>
  );
}
