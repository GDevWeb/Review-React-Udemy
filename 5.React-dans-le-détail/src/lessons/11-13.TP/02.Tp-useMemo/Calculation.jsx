/* Exercice 2 : Utilisation de useMemo
Créez un composant ExpensiveCalculation qui effectue un calcul coûteux lorsqu'une température en Celsius est saisie dans un champ d'entrée. Utilisez useMemo pour éviter de recalculer la conversion en Fahrenheit à chaque rendu. */

import React, { useMemo, useState } from "react";
import "./Calculation.css";

export default function Calculation() {
  // 1.State:

  const [degree, setDegree] = useState(0);

  // 2.Behavior:

  const handleDegreeInput = (e) => {
    setDegree(e.target.value);
  };

  const convertDegree = (degree) => {
    console.log("Render expensiveCalculation !");
    return degree * 1.8 + 32;
  };

  const expensiveCalculation = useMemo(() => convertDegree(degree), [degree]);

  // 3.Render:
  return (
    <>
      <div id="containerDegrees">
        <h2>Calculation °C to °F</h2>
        <div className="inputGroup">
          <label htmlFor="inputCelsius">
            Please input degrees Celsius (°C)
          </label>
          <input
            type="number"
            name="inputCelsius"
            id="inputCelsius"
            placeholder="input °C"
            value={degree}
            onChange={handleDegreeInput}
          />
          <button
            style={
              degree > 0
                ? { backgroundColor: "greenyellow" }
                : { backgroundColor: "orangeRed" }
            }
            aria-label="button to convert °C into °F"
            onClick={convertDegree}
          >
            Convert
          </button>
          <p>Result : {expensiveCalculation}</p>
        </div>
      </div>
    </>
  );
}

/* Note sur l'utilisation de useMemo :

useMemo est un hook de React qui permet de mémoriser le résultat d'une fonction de manière à ce qu'elle ne soit recalculée que si l'une de ses dépendances change. Cela permet d'optimiser les performances en évitant des calculs coûteux lors de rendus successifs.

Dans l'exemple donné, le composant ExpensiveCalculation effectue une conversion de degrés Celsius en Fahrenheit. En utilisant useMemo, la conversion n'est recalculée que si la valeur des degrés Celsius change, ce qui évite des calculs inutiles et améliore les performances de l'application. */
