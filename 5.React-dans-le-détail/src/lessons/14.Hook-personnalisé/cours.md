## Les Hooks Personnalisés en React

Les Hooks personnalisés sont une fonctionnalité puissante de React qui permet aux développeurs de créer leurs propres hooks réutilisables. Les hooks personnalisés sont des fonctions JavaScript qui peuvent utiliser les hooks existants (comme `useState`, `useEffect`, etc.) et les combiner pour encapsuler une logique spécifique et la rendre facilement réutilisable dans différents composants.

### Avantages des Hooks Personnalisés

- **Réutilisabilité**: Les hooks personnalisés permettent d'encapsuler une logique spécifique et de la réutiliser dans plusieurs composants sans avoir à dupliquer le code.
  
- **Abstraction de la Complexité**: Ils permettent de cacher la complexité d'une logique ou d'une interaction avec une API derrière une interface simple et intuitive.

- **Séparation des Préoccupations**: En encapsulant une logique dans un hook personnalisé, on peut séparer efficacement les préoccupations liées à la présentation et à la logique métier dans les composants React.

### Création d'un Hook Personnalisé

Pour créer un hook personnalisé, il suffit de définir une fonction JavaScript qui utilise d'autres hooks React, puis de l'appeler depuis un composant. Voici les étapes de base pour créer un hook personnalisé :

1. **Définir la fonction du hook personnalisé**: Cette fonction peut prendre des arguments si nécessaire et utilise des hooks React à l'intérieur pour gérer l'état, les effets secondaires, etc.

2. **Utiliser les hooks existants**: À l'intérieur de la fonction du hook personnalisé, vous pouvez utiliser des hooks React comme `useState`, `useEffect`, `useContext`, etc., pour gérer l'état et les effets secondaires.

3. **Renvoyer les valeurs nécessaires**: Assurez-vous que la fonction du hook renvoie les valeurs nécessaires, telles que l'état, les fonctions pour modifier l'état, etc., pour que les composants puissent les utiliser.

### Exemple d'un Hook Personnalisé

Voici un exemple d'un hook personnalisé nommé `useAPI` qui récupère des données d'une API de photos de chats :

```javascript
import { useState, useEffect } from "react";

export default function useAPI() {
  // 1.State :
  const [catData, setCatData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // 2.Behavior:
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setCatData(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  // 3.Render:
  return { catData, error, loading };
}
```

Ce hook personnalisé `useAPI` gère les états de chargement, les erreurs et les données récupérées à partir de l'API. Il renvoie ces valeurs pour être utilisées dans les composants.

### Utilisation d'un Hook Personnalisé dans un Composant

Voici comment utiliser le hook `useAPI` dans un composant React :

```javascript
import React, { useEffect } from "react";
import useAPI from "./useAPI";

export default function Container() {
  // Utilisation du hook personnalisé useAPI
  const { catData, error, loading } = useAPI();

  useEffect(() => {
    document.title = "Hook personnalisé - Utilisation";
  }, []);

  // Affichage conditionnel en fonction de l'état de chargement et des données
  let content;

  if (loading && !error) {
    content = <img src={spinner} alt="Loading icon" />;
  } else if (error) {
    content = <p>An error occurred</p>;
  } else if (catData) {
    content = <img src={catData[0].url} alt="Cat photo" />;
  }

  return (
    <div>
      <h1>Photos de chats 🐾</h1>
      {content}
    </div>
  );
}
```

Dans ce composant `Container`, nous utilisons le hook personnalisé `useAPI` pour récupérer les données de l'API. En fonction de l'état de chargement et des données, nous affichons différents contenus dans le composant.

Les hooks personnalisés offrent une solution élégante pour réutiliser la logique métier et l'encapsuler de manière à ce qu'elle soit facilement réutilisable et testable dans les composants React.