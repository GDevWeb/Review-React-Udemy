/* Créez un composant Counter qui affiche un compteur et un bouton pour l'incrémenter. Utilisez memo pour optimiser le rendu du composant.
 */

import { memo, useState } from "react"

const Counter = memo(function Counter(){
    // optimisation du composant :

    // 1.State :
    const [counter, setCounter] = useState(0);

    // 2.Behavior:
const increment = () => {
    setCounter(counter+1)
}

    // 3.Render :
    return <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button type="button" aria-label="bouton incrémenter compteur" onClick={increment}>Increment</button>
    </>

});

export default Counter;

/* 
Rappel memo est utilisé pour optimiser le rendu d'un composant - si aucun changement dans ce dernier - le rendu restera le même si un changement de state a lieu dans ce dernier alors seulement un nouveau rendu aura lieu

*/