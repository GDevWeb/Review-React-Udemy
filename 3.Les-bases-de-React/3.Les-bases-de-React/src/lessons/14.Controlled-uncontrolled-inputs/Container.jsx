import { useState, useRef } from "react";
import "./Container.css";

export default function Container() {
  const [state, setState] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire peut être ajoutée ici
  };

  return (
    <div>
      <h1>Composants "controlled"</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom</label>
        <input
          onChange={handleInput} // fonction passant par le setter de state qui permet de modifier la valeur initiale du state
          value={state} // liaison du state
          type="text"
          id="name"
        />
        {!state && <p>Veuillez remplir cet input</p>}
        <button>Valider</button>
      </form>
      <p>Votre pseudo : {state}</p>
    </div>
  );
}

/* 
CQFD les inputs incontrôlés :

1. Utilisation des composants "controlled" :
   Les inputs contrôlés sont des inputs dont la valeur est entièrement contrôlée par React via l'état du composant. Dans cet exemple, la valeur de l'input est stockée dans l'état `state` et est mise à jour à chaque changement grâce à la fonction `handleInput`.

2. Gestion des changements d'entrée :
   La fonction `handleInput` est appelée à chaque fois que l'utilisateur modifie la valeur de l'input. Cette fonction met à jour l'état `state` avec la nouvelle valeur de l'input, ce qui entraîne un rendu mis à jour de l'input.

3. Utilisation de la liaison de données (data binding) :
   La valeur de l'input est liée à l'état `state` via l'attribut `value`. Cela signifie que la valeur de l'input est toujours synchronisée avec l'état actuel du composant.

4. Validation de l'input :
   Une condition `{!state && <p>Veuillez remplir cet input</p>}` est utilisée pour afficher un message d'erreur si l'input est vide. Cela garantit que l'utilisateur reçoit un retour visuel lorsqu'il tente de soumettre un formulaire avec un input vide.

5. Soumission du formulaire :
   Lorsque l'utilisateur soumet le formulaire en cliquant sur le bouton "Valider", la fonction `handleSubmit` est appelée. Dans cet exemple, cette fonction est vide, mais vous pouvez y ajouter la logique de soumission du formulaire nécessaire pour votre application.
*/
