Voici un CQFD pour expliquer la sélection statique avec `useRef` dans React :

---

### Sélection statique avec `useRef` dans React

**Qu'est-ce que la sélection statique ?**
La sélection statique fait référence à la sélection d'un ensemble prédéfini d'éléments dans un composant React, où ces éléments sont définis directement dans le code JSX et ne changent pas dynamiquement pendant l'exécution.

**Pourquoi utiliser `useRef` pour la sélection statique ?**
- `useRef` est utile pour stocker des références vers des éléments DOM spécifiques dans un composant React.
- Dans le cas de la sélection statique, `useRef` peut être utilisé pour stocker des références vers des éléments d'entrée ou d'autres éléments DOM, afin de pouvoir accéder à ces éléments de manière programmatique si nécessaire.

**Comment utiliser `useRef` pour la sélection statique ?**
- Créez une référence en utilisant `useRef()`.
- Attachez cette référence aux éléments du DOM que vous souhaitez sélectionner statiquement en utilisant l'attribut `ref`.
- Utilisez la référence pour accéder à ces éléments et effectuer les opérations souhaitées.

**Syntaxe de base :**
```javascript
const refName = useRef();
```

**Exemple d'utilisation :**
```javascript
const inputsRef = useRef([]);

function addInputsRef(el) {
  if (el && !inputsRef.current.includes(el)) {
    inputsRef.current.push(el);
  }
}
```

**Avantages de l'utilisation de `useRef` pour la sélection statique :**
- Permet d'accéder facilement aux éléments DOM spécifiques définis dans le code JSX.
- Facilite la manipulation de ces éléments sans nécessiter de requêtes DOM complexes.

**Limitations et considérations :**
- Assurez-vous que les références sont correctement initialisées et utilisées dans votre composant.
- Évitez de trop dépendre des références pour la gestion des états et des comportements, car cela peut rendre le code moins clair et plus difficile à maintenir.

**Résumé :**
- `useRef` est un outil pratique pour la sélection statique d'éléments dans un composant React, offrant une solution simple et efficace pour accéder et manipuler ces éléments dans le cadre d'une application React.

---

Ce CQFD explique comment utiliser `useRef` pour la sélection statique d'éléments dans un composant React, en mettant en évidence ses avantages, sa syntaxe et ses considérations d'utilisation.