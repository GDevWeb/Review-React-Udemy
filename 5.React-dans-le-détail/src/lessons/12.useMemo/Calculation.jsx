import React, { useMemo, useState } from "react";

export default function Calculation() {
  // 1.State :
  const [temperature, setTemperature] = useState(0);

  // 2.Comportement:
  const celsiusToFarenheit = (degree) => {
    return degree ? degree * 1.8 + 32 : "Veuillez entrer une valeur !";
  };

  const handleInput = (e) => {
    setTemperature(e.target.value);
  };

  const expensiveCalculation = useMemo(
    () => celsiusToFarenheit(temperature),
    [temperature]
  );

  console.log("Render");

  // 3.Render:

  return (
    <div>
      <h1>Cal degrés celsius to degrés Farenheit</h1>
      <input
        type="number"
        placeholder="saisir la température en °C"
        value={temperature}
        onChange={handleInput}
      />

      <p>Valeur de {temperature}°C</p>
      <p>en Farenheit {expensiveCalculation}°F</p>
    </div>
  );
}

/* 
CQFD useMemo :





*/
