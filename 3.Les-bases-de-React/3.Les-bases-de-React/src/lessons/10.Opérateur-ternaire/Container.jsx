import { useState } from "react";
import "./Container.css";

export default function Container() {
  // State :
  const [validation, setValidation] = useState(false);
  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez-vous ?</label>
        <input onClick={() => setValidation(!validation)} type="checkbox" />
        {/* <p style={{color : `${validation ? "lightGreen" : "crimson"}`}}> */}
        <p className={`${validation ? "valid" : "invalid"}`}>
          {validation
            ? "Bravo, vous avez envoyer le formulaire"
            : "Vous devez cocher la case"}
        </p>
      </form>
    </div>
  );
}

/* 
CQFD Rendu conditionnel avec une opération ternaire :

1. Utilisation de l'opération ternaire :
   L'opération ternaire est utilisée pour effectuer un rendu conditionnel en fonction de la valeur de la variable `validation`. Si `validation` est vraie, le message "Bravo, vous avez envoyé le formulaire" est affiché, sinon le message "Vous devez cocher la case" est affiché.

2. Gestion de la classe CSS :
   La classe CSS appliquée au paragraphe est déterminée dynamiquement en fonction de la valeur de `validation`. Si `validation` est vraie, la classe "valid" est appliquée, sinon la classe "invalid" est appliquée. Cela permet de modifier le style du paragraphe en fonction de l'état de la validation.

3. Interaction utilisateur :
   Lorsque l'utilisateur clique sur la case à cocher, la valeur de `validation` est inversée grâce à la fonction `setValidation()`. Cela déclenche la mise à jour de l'interface utilisateur en fonction de la nouvelle valeur de `validation`.

4. Utilisation de CSS :
   Les styles pour les classes "valid" et "invalid" peuvent être définis dans un fichier CSS externe, ce qui permet de séparer les préoccupations et de rendre le code plus modulaire et maintenable.
*/