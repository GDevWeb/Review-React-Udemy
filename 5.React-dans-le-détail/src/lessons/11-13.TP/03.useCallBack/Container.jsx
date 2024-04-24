/* Exercice 3 : Utilisation de useCallback
Créez un composant ButtonList qui affiche une liste de boutons numérotés de 1 à 5. Chaque bouton doit afficher son numéro lorsqu'il est cliqué. Utilisez useCallback pour optimiser les gestionnaires de clic des boutons.
 */
import { useCallback, useEffect, useState } from "react";
import ButtonList from "./ButtonList";

function Container() {
  // 1.State :
  const [buttonNumber, setButtonNumber] = useState("");

  useEffect(() => {
    document.title = "Tp - useCallBack";
  }, []);
  // 2.Behavior :
  const sayMyNumber = useCallback((e) => {
    console.log("Render button's Number", sayMyNumber);
    setButtonNumber(`Hello, i'm the button number ${e.target.id}`);
  }, []);
  // 3.Render :
  return (
    <>
      <h1>TP - useCallBack</h1>
      <ButtonList sayMyNumber={sayMyNumber} buttonsNumber={buttonNumber} />
    </>
  );
}

export default Container;

/* 
useCallback est utilisé pour mémoriser une fonction, afin d'éviter un rendu inutile à chaque rendu du composant.
utile pour optimiser le passage de props à un composant enfant !

*/
