import { memo } from "react";

export default memo(function Card({ text, customLog }) {
  // 1.State:

  // 2.Comportement:
  console.log("Render");

  // 3.Render :
  customLog();

  return (
    <>
      <p>Carte</p>
      <p>{text}</p>
    </>
  );
});

/* 
CQFD à propos de memo

memo est à utiliser avec parcimonie lorsque cela nécessite bcp de ressources, de calcul ...
l'utiliser à tout bout de champ cela peur le rendre plus coûteux que avantageux


useCallback : 
customLog():
cela va comparer la valeur de référence à chaque changement de state, à chaque nouveau render une nouvelle valeur / une nouvelle props / une nouvelle fonction est créée donc il y aura forcément un render de la fonction customLog()

useCallback

permet de mémoriser une fonction, à chaque render la fonction ne sera pas recalculée

  le fait d'utiliser useCallback, cela mémorise la fonction dans le cache de react 
  le tableau de dépendance fonctionne comme pour useEffect, il permet de surveiller le changement de valeur d'un state, d'un élément ou pas


  il ne faut surtout pas utiliser useCallBack pour tous les cas, cela peut devenir contre productif


  Por rappel :

  comparaison de valeur de référence :

  "test" === "test" => true

  comparaison de valeur primitive :

  const obj1 = {a:3}
  const obj2 = {a:3}

  obj1 === obj2 => false //car la valeur dans la mémoire n'est pas la même car ils n'ont pas la même place dans la mémoire

  
*/
