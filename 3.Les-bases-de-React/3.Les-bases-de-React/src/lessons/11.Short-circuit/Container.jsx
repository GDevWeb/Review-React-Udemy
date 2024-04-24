export default function Container() {

  const isLogged = false;

  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>

      {/* Affichera le bouton seulement si isLogged est true */}
      {isLogged && <button>Afficher la collection</button>}
    </div>
  );
}

/* 
CQFD - L'opérateur de court-circuitage (short-circuit operator) :

1. Utilisation de l'opérateur de court-circuitage :
   L'opérateur de court-circuitage, représenté par `&&`, est utilisé pour effectuer un rendu conditionnel en JSX. Dans cet exemple, le bouton "Afficher la collection" ne sera affiché que si la valeur de `isLogged` est true. Si `isLogged` est false, le bouton ne sera pas rendu.

2. Avantages de l'opérateur de court-circuitage :
   - Il offre une syntaxe concise et lisible pour effectuer un rendu conditionnel en JSX.
   - Il évite l'écriture de constructions ternaires plus longues lorsque la logique est simple.
   - Il permet de rendre le code plus clair en mettant en évidence les conditions qui déterminent le rendu des éléments.

3. Utilisation dans d'autres contextes :
   L'opérateur de court-circuitage peut également être utilisé pour d'autres tâches, telles que la condition d'exécution d'une fonction, la vérification de la présence d'une propriété avant son utilisation, etc. Il est très polyvalent et utile dans de nombreuses situations.
*/
