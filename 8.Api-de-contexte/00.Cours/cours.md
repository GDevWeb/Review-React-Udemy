### Cours sur le Context API de React

Le Context API est une fonctionnalité de React qui permet de transmettre des données à travers l'arbre des composants sans avoir à passer explicitement des props à chaque niveau. Il est utile pour le partage d'état ou de configuration entre différents composants d'une application React, en particulier lorsque ces composants sont profondément imbriqués dans la hiérarchie des composants.

#### Création du Context

Le Context est créé en utilisant la fonction `createContext()` de React. Cette fonction renvoie un objet avec deux composants React : `Provider` et `Consumer`.

```javascript
// createContext crée un nouveau contexte
const MyContext = React.createContext(defaultValue);
```

#### Utilisation du Provider

Le composant `Provider` est utilisé pour envelopper la partie de l'arbre de composants où vous souhaitez rendre les données du contexte disponibles.

```javascript
<MyContext.Provider value={/* valeur à transmettre */}>
  {/* Composants enfants où le contexte est disponible */}
</MyContext.Provider>
```

#### Utilisation du Consumer

Le composant `Consumer` est utilisé pour accéder aux données du contexte à l'intérieur des composants enfants. Il utilise la technique du rendu de fonction (render props).

```javascript
<MyContext.Consumer>
  {value => /* Rendu basé sur la valeur du contexte */}
</MyContext.Consumer>
```

#### Hook useContext

React propose également le hook `useContext` qui permet d'accéder au contexte dans les composants fonctionnels.

```javascript
const value = useContext(MyContext);
```

### Exemple d'utilisation du Context API

Voici un exemple simple illustrant comment utiliser le Context API de React pour partager des données entre différents composants :

```javascript
// ThemeContext.js
import React from "react";

// Création du contexte
const ThemeContext = React.createContext("light");

export default ThemeContext;

// App.js
import React from "react";
import ThemeContext from "./ThemeContext";
import Toolbar from "./Toolbar";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;

// Toolbar.js
import React from "react";
import ThemeContext from "./ThemeContext";

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default Toolbar;

// ThemedButton.js
import React from "react";
import ThemeContext from "./ThemeContext";

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme }}>Themed Button</button>;
}

export default ThemedButton;
```

Dans cet exemple, le contexte de thème est partagé à partir du composant `App` vers le composant `Toolbar` et ensuite vers le composant `ThemedButton` à l'aide du Context API de React. Le thème `dark` est passé en valeur du contexte dans le composant `App`, et le bouton dans le composant `ThemedButton` utilise ce thème pour définir son style.
