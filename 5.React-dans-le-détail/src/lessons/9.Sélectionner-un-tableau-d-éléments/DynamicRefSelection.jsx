import React, { useState, useRef } from "react";
import { nanoid } from "nanoid";

function DynamicRefSelection() {
  // 1. State :
  const [fruits, setFruits] = useState([
    { id: nanoid(8), value: "🍎" },
    { id: nanoid(8), value: "🍍" },
    { id: nanoid(8), value: "🍋" },
  ]);

  const fruitsRef = useRef([]);

  // 2.Comportement :
  const handleDelete = (fruitId, fruitName) => {
    const updatedFruitsList = fruits.filter((fruit) => fruit.id !== fruitId);
    setFruits(updatedFruitsList);
    console.log("Suppression du fruit", fruitName);
  };

  const handleAddFruit = () => {
    const newFruit = { id: nanoid(8), value: "🍍" };
    setFruits([...fruits, newFruit]);
    console.log("Nouveau fruit ajouté :", newFruit);
  };

  const handleRefs = (element) => {
    if (element) {
      fruitsRef.current.push(element);
    } else {
      fruitsRef.current.shift();
    }
    console.log(element);
  };

  // 3.Render :
  return (
    <>
      <h1>Sélectionner une liste dynamique</h1>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id} ref={handleRefs}>
            <span>{fruit.value}</span>
            <button onClick={() => handleDelete(fruit.id, fruit.value)}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => handleAddFruit()}>Ajouter fruit</button>
    </>
  );
}

export default DynamicRefSelection;


/* CQFD Sélection Dynamique avec useRef



*/