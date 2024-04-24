// Méthode 1 :
// export default function Container() {

//   // State :

//   const isLogged = true;

//   // Comportement :

//   if(isLogged){
//     return <h2 style={{color : "green"}}>Vous êtes connectés</h2>
//   }else{
//     return <h2 style={{color : "crimson"}}>Vous n'êtes pas connectés</h2>

//   }

//   // Render :
//   return <div>
//     <h1>Rendu conditionnel</h1>

//   </div>
// }

import React from 'react'

function Container() {

  const isLogged = true;

  let content;

  if (isLogged) {
    content = `Bienvenue sur votre contenu privé `;
  } else {
    content = `Vous n'êtes pas connecté !`;
  }

  return (
    <div>
      <h1>Rendu conditionnel avec if</h1>
      {content}
      </div>
  )
}

export default Container


/* 
CQFD - Le rendu conditionnel avec if :

1. Utilisation d'une variable pour stocker le contenu conditionnel :
   Dans cet exemple, une variable `content` est utilisée pour stocker le contenu à afficher en fonction de la condition. Cela rend le code plus lisible et plus facile à maintenir.

2. Condition if pour déterminer le contenu à afficher :
   Une structure de contrôle if est utilisée pour déterminer le contenu à afficher en fonction de la valeur de `isLogged`. Si `isLogged` est vrai, le message de bienvenue est assigné à la variable `content`, sinon le message de déconnexion est assigné.

3. Affichage du contenu conditionnel :
   Le contenu stocké dans la variable `content` est affiché à l'intérieur du composant JSX en utilisant des accolades `{}`. Cela permet d'insérer du contenu dynamique dans le rendu JSX.

4. Approche basée sur les conditions :
   Cette méthode est une approche simple et directe pour gérer le rendu conditionnel dans les composants React. Elle est souvent utilisée lorsque la logique conditionnelle est simple et ne nécessite pas de traitement supplémentaire.

5. Remarque :
   Cette méthode peut être utilisée dans les composants fonctionnels React. Elle offre une syntaxe claire et concise pour implémenter le rendu conditionnel en utilisant des instructions if.
*/