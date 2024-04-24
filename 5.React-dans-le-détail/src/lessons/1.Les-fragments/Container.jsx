export default function Container() {
  return (
    <div>
      <h1>Les fragments</h1>
    </div>
  )
}


/* 
CQFD - Les React Fragments


Utilité des Fragments :

Les fragments sont utilisés pour regrouper plusieurs éléments enfants sans ajouter d'élément DOM supplémentaire.
Ils sont particulièrement utiles lorsque vous devez retourner plusieurs éléments à partir d'un composant sans les envelopper dans un div ou un autre élément de conteneur.
Syntaxe des Fragments :

La syntaxe courte pour les fragments est <> ... </>, où vous pouvez placer n'importe quel nombre d'éléments enfants à l'intérieur des balises <>.
Vous pouvez également utiliser <React.Fragment> ... </React.Fragment> pour des fragments nommés.
Avantages des Fragments :

Les fragments évitent d'introduire des nœuds DOM inutiles dans l'arbre DOM, ce qui peut aider à améliorer les performances de l'application.
Ils permettent également d'éviter les problèmes de style et de mise en page liés à l'ajout d'éléments DOM supplémentaires.
Compatibilité :

Les fragments sont pris en charge par React depuis la version 16.2.
Ils sont largement utilisés dans le développement React moderne pour améliorer la lisibilité et la performance du code.
En résumé, les fragments sont un outil pratique pour regrouper plusieurs éléments sans introduire de nœuds DOM supplémentaires, ce qui peut être bénéfique en termes de performance et de clarté du code.

*/