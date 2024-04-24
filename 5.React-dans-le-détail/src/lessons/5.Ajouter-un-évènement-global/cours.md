Voici un CQFD (Ce Qu'il Faut Démontrer) concernant l'ajout d'un événement global dans un composant React :

---

### Ajouter un événement global dans un composant React

**Qu'est-ce qu'un événement global ?**
Un événement global est un événement qui est écouté au niveau de l'ensemble de la fenêtre ou de l'application, et non pas limité à un élément spécifique du DOM. Il peut être utile pour détecter des actions utilisateur telles que le défilement de la page, la pression de touches spécifiques, etc.

**Pourquoi ajouter un événement global ?**
- Ajouter un événement global peut être nécessaire lorsque vous avez besoin de détecter des actions utilisateur qui ne sont pas liées à un élément spécifique du DOM.
- Cela peut être utile pour gérer des fonctionnalités telles que le défilement de la page, les raccourcis clavier, ou la gestion de l'état global de l'application.

**Comment ajouter un événement global dans un composant React ?**
- Utilisez `useEffect` pour ajouter un écouteur d'événement au niveau de la fenêtre.
- Assurez-vous de nettoyer l'écouteur d'événement lors du démontage du composant pour éviter les fuites de mémoire et les effets indésirables.

**Syntaxe de base :**
```javascript
useEffect(() => {
  window.addEventListener("eventName", eventHandler);

  return () => {
    window.removeEventListener("eventName", eventHandler);
  };
}, []);
```
- Remplacez `"eventName"` par le nom de l'événement que vous souhaitez écouter (par exemple, `"scroll"` pour le défilement de la page).
- Remplacez `eventHandler` par la fonction de gestion de l'événement.

**Avantages :**
- L'ajout d'événements globaux permet de détecter des actions utilisateur au niveau de l'ensemble de l'application.
- Cela offre une flexibilité supplémentaire pour la gestion des interactions utilisateur et l'état global de l'application.

**Considérations :**
- Évitez d'ajouter trop d'événements globaux, car cela peut entraîner une surcharge et une complexité inutiles dans votre application.
- Assurez-vous de nettoyer correctement les écouteurs d'événements pour éviter les fuites de mémoire et les problèmes de performance.

**Résumé :**
- L'ajout d'événements globaux dans les composants React permet de détecter des actions utilisateur au niveau de l'ensemble de l'application, offrant ainsi une flexibilité supplémentaire pour la gestion des interactions utilisateur et de l'état global.

---

Ce CQFD offre une explication détaillée de l'ajout d'événements globaux dans un composant React, y compris sa syntaxe, ses avantages, et ses considérations lors de son utilisation dans le développement d'applications React.