import { useRef } from "react";

export default function StaticRefSelection() {
  // 1.State :

  // 2.Comportement :
  const inputsRef = useRef([]);

  function addInputsRef(el) {
    if (el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
    }
    console.log(inputsRef);
  }
  // 3.Render :

  return (
    <>
      <h1>Sélectionner un tableau d'éléments</h1>

      <input ref={addInputsRef} type="text" />
      <input ref={addInputsRef} type="text" />
      <input ref={addInputsRef} type="text" />
    </>
  );
}

/**
 * CQFD Sélection statique avec useRef
 * 
 * 
 */
