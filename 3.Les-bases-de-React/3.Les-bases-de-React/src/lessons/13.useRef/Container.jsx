import { useState, useRef } from "react";

export default function Container() {

  // State :
  const [count, setCount] = useState(0);

  // Comportement :
  const countRef = useRef(0);

  const handleCountRef = () => {
    countRef.current++
    console.log(countRef.current);
  }
  
  return (
    <div>
      <h1>Comprendre le hook useRef()</h1>
      <p>State count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment State</button>
      <p>Valeur de la ref {countRef.current}</p>
      <button onClick={handleCountRef}>Increment Ref</button>
    </div>
  );
}

/* 
CQFD useRef() :

1. Isoler une valeur parmi les mises à jour :
   Le hook useRef() permet de créer une référence mutable qui persiste entre les rendus du composant. Cela permet d'isoler une valeur de l'état et de la maintenir entre les mises à jour du composant sans déclencher de nouveau rendu lorsque cette valeur change. Dans cet exemple, countRef.current est utilisé pour stocker une valeur qui n'entraîne pas de nouveau rendu lorsque son contenu est modifié.

2. Sélectionner un élément du DOM :
   Outre l'isolation de valeurs, le hook useRef() peut également être utilisé pour sélectionner des éléments du DOM dans les composants fonctionnels. La référence créée par useRef() peut être attribuée à une balise JSX, puis utilisée pour accéder à cet élément du DOM dans le code du composant. Cela est utile pour manipuler directement les éléments DOM sans avoir besoin de querySelector ou d'autres méthodes similaires.

3. Utilisation dans d'autres contextes :
   En plus des cas d'utilisation mentionnés, le hook useRef() peut être utilisé pour diverses autres tâches, telles que la mémorisation d'une valeur entre les rendus, la persistance d'une valeur entre les appels de gestionnaires d'événements, etc. Sa polyvalence en fait un outil précieux dans le développement d'applications React.
*/
