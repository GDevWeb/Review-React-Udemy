import { useEffect, useReducer } from "react";

export default function Container() {
  // 1.State :
  const [count, dispatch] = useReducer(reducer, 0)

  // 2.Comportement:
  function reducer(state, action){

    switch(action.type){
      case  "increment":
        console.log(action);
        return state +1;

      case  "increment5":
        console.log(action);
        return state + action.payload;

        case "decrement" : 
        return state -1;

        case "reset" :
          return state == 0;
    }

  }

  useEffect(() => {
    document.title = "13.useReducer";
  });
  // 3.Render:

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>Incrémenter</button>
      <button onClick={() => dispatch({type: "increment5", payload: 5})}>Incrémenter 5</button>
      <button onClick={() => dispatch({type: "decrement"})}>Décrémenter</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

/* 
CQFD à propos de useReducer:

reducer sert à modifier le state en fonction d'une action
dispatch envoie les actions à notre reducer
payload permet de charger des action supplémentaires
*/
