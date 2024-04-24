/* Créez un composant Counter qui affiche un compteur et un bouton pour l'incrémenter. Utilisez memo pour optimiser le rendu du composant.
 */

import Counter from "./Counter";

function Container() {
  // 1.State :

  useEffect(() => {
    document.title = "Tp - memo - ExpensiveCalculation";
  },[]);


  // 2.Behavior (functions):

  // 3.Render :
  return (
    <>
      <Counter />
    </>
  );
}

export default Container;
