import { useState, useRef } from "react";
import "./Container.css";

export default function Container() {
  const [state, setState] = useState("");

  // 2. Méthode des inputs incontrôlés :
  const emailRef = useRef();

  const handleInput = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire peut être ajoutée ici

    console.log(emailRef.current.value); // Accéder à la valeur de l'input non contrôlé avec la référence
  };

  return (
    <div>
      <h1>Composants "uncontrolled"</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom</label>
        <input
          onChange={handleInput} // fonction passant par le setter de state qui permet de modifier la valeur initiale du state
          value={state} // liaison du state
          type="text"
          id="name"
        />
        {!state && <p>Veuillez remplir cet input</p>}

        {/* 2. Les inputs incontrôlés */}
        <label htmlFor="email">Votre email</label>
        <input
          ref={emailRef} // Référence pour accéder à l'élément non contrôlé
          type="email"
          id="email"
        />
        <button>Valider</button>
      </form>
      <p>Votre pseudo : {state}</p>
    </div>
  );
}

/* 
CQFD les inputs incontrôlés :

1. Les inputs incontrôlés :
   Les inputs incontrôlés sont des inputs dont la valeur n'est pas contrôlée par React via l'état du composant. Au lieu de cela, la valeur est stockée directement dans l'élément DOM lui-même. Dans cet exemple, l'input email est un exemple d'input non contrôlé, car sa valeur n'est pas liée à l'état du composant. Au lieu de cela, une référence (emailRef) est utilisée pour accéder à la valeur de l'input lorsque nécessaire.

2. Utilisation de useRef() :
   La fonction useRef() est utilisée pour créer une référence au composant d'input non contrôlé (dans ce cas, l'input email). Cette référence (emailRef) est ensuite utilisée pour accéder à la valeur de l'input lors de la soumission du formulaire (dans la fonction handleSubmit). Cela permet d'accéder aux valeurs des inputs non contrôlés sans avoir besoin de mettre à jour l'état du composant.

3. Avantages et inconvénients :
   Les inputs incontrôlés peuvent être utiles dans certaines situations où vous avez besoin d'accéder à la valeur de l'input sans déclencher de rendu supplémentaire dans React. Cependant, ils ont tendance à être moins prévisibles et plus sujets aux erreurs que les inputs contrôlés, donc il est recommandé de les utiliser avec précaution.
*/
