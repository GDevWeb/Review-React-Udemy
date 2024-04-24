import { useState } from "react";
import "./Container.css";

export default function Container() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Bienvenue sur mon Blog</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni aspernatur temporibus ipsa iusto voluptatum commodi ex necessitatibus aut id cupiditate eius, dolores error voluptatem dolorem facilis hic deleniti cum.</p>

      <button onClick={() => setDarkMode(!darkMode)}>Activer {darkMode ? "Light mode" : "Dark mode"}</button>
    </div>
  );
}

/* 
CQFD Toggle une classe ou du CSS :

1. Utilisation de l'opérateur ternaire :
   L'opérateur ternaire est utilisé pour basculer entre les classes CSS en fonction de l'état de `darkMode`. Si `darkMode` est true, la classe "dark-mode" est ajoutée à la liste de classes de l'élément, sinon elle n'est pas ajoutée.

2. Ajout et suppression de classes :
   L'utilisation de l'opérateur ternaire de cette manière permet d'ajouter ou de supprimer dynamiquement une classe CSS en fonction d'une condition. Cela permet de modifier le style de l'élément en réponse à une interaction utilisateur ou à un état interne de l'application.

3. Gestion de l'état :
   L'état de `darkMode` est géré à l'aide du hook useState(), ce qui permet de rendre l'interface utilisateur réactive et de mettre à jour le style en fonction de l'état actuel.

4. Interaction utilisateur :
   Lorsque l'utilisateur clique sur le bouton, l'état de `darkMode` est inversé à l'aide de la fonction setDarkMode(), ce qui entraîne une mise à jour du style de l'élément en fonction du nouvel état.
*/
