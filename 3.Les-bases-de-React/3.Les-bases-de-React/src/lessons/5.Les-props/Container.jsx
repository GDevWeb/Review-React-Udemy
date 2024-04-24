import { useState } from "react";
import Card from "./Card";

export default function Container() {
  
  // State :
  const [state, setState] = useState("Hello world");


  const id = new Date().getTime();

  // Comportement:

  const changeState = () => {
setState((currentValue) => currentValue === "Hello world" ? "Good Bye World" : "Hello world")

  }

  // Render :
  return (
    <div>
      <h1>Les props</h1>
    <p>State du container {state}</p>
      <Card id={id} state={state}/>
      <button onClick={changeState}>Change State</button>
    </div>
  )
}


/* 
CQFD les props :

1. Les props sont des attributs passés à un composant React.
2. Ils permettent de passer des données d'un composant parent à un composant enfant.
3. Les props sont immuables, c'est-à-dire qu'ils ne peuvent pas être modifiés à l'intérieur du composant enfant.
4. Dans cet exemple, le composant Container passe les props `id` et `state` au composant Card.
5. Le composant Card peut alors utiliser ces props pour afficher des données ou effectuer des actions en fonction de ces valeurs.
6. Utiliser des props permet de rendre les composants React plus modulaires et réutilisables en les rendant indépendants de leur contexte d'utilisation.
*/