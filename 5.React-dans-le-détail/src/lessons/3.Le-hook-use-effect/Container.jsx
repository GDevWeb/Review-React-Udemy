import { useEffect, useState } from "react";
import "./Container.css";

export default function Container() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effet déclenché après chaque mise à jour de count");
  }, [count]);

  useEffect(() => {
    console.log("Effet déclenché après la première création du composant");
  }, []);

  console.log("Rendu du composant");

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <p>Valeur de count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}


/* 
CQFD useEffect

Commentaire sur la première utilisation de useEffect :

Vous avez expliqué correctement que le deuxième argument (le tableau de dépendance) de useEffect contrôle quand l'effet est exécuté.
Dans votre commentaire, vous avez mentionné que si le tableau de dépendance est vide, l'effet ne sera déclenché qu'après la première création. C'est correct, mais vous pourriez expliquer un peu plus pourquoi cela se produit. L'effet avec un tableau de dépendance vide est exécuté après chaque rendu, mais puisqu'il n'y a pas de dépendance, il n'est déclenché qu'une seule fois après la première création du composant.
Modification du message de console pour le deuxième useEffect :

Vous avez correctement expliqué que cet effet est déclenché après la première création du composant, mais j'ai modifié légèrement le message de console pour le rendre plus explicite.
Ajout d'un message de console pour le rendu du composant :

J'ai ajouté un message de console pour indiquer quand le composant est rendu, ce qui peut aider à comprendre le cycle de vie du composant.

 */
