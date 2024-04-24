/* Exercice 4 : Utilisation de useReducer
Créez un composant ShoppingCart qui permet d'ajouter, de supprimer et de réinitialiser des articles dans un panier. Utilisez useReducer pour gérer l'état du panier. */

import { useEffect } from "react";
import ShoppingCart from "./ShoppingCart";

export default function Container() {
  const documentTitle = "Tp - useReducer - ShoppingCart";
  // 1.Sate :

  useEffect(() => {
    document.title = documentTitle;
  }, []);
  // 2.Behavior:

  // 3.Render:
  return (
    <>
      <h1>{documentTitle}</h1>

      <ShoppingCart />
    </>
  );
}
