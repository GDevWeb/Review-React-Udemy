/* Exercice 3 : Utilisation de useCallback
Créez un composant ButtonList qui affiche une liste de boutons numérotés de 1 à 5. Chaque bouton doit afficher son numéro lorsqu'il est cliqué. Utilisez useCallback pour optimiser les gestionnaires de clic des boutons.
 */

export default function ButtonList({ sayMyNumber, buttonsNumber }) {
  // 1.State :

  // 2.Behavior :

  // 3.Render :
  return (
    <>
      <div className="buttonsGroup">
        <button id="1" onClick={sayMyNumber}>
          Button 1
        </button>
        <button id="2" onClick={sayMyNumber}>
          Button 2
        </button>
        <button id="3" onClick={sayMyNumber}>
          Button 3
        </button>
        <button id="4" onClick={sayMyNumber}>
          Button 4
        </button>
        <button id="5" onClick={sayMyNumber}>
          Button 5
        </button>
      </div>
      <p id="messageMyNumber">{buttonsNumber ? buttonsNumber : "Null"}</p>
    </>
  );
}
