import "./Container.css"

export default function Container() {

  return (
    <div>
      <h1>Utiliser du CSS</h1>
      <p style={{color: "crimson", backgroundColor: "white"}}>Le CSS inline</p>

      <h3>La feuille de styles</h3>
      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius delectus eos mollitia alias similique aperiam distinctio cum. Delectus, molestias ut laboriosam id maxime sed quas quod fugit vitae iusto!</p>
    </div>
  )
}


/* CQFD Utiliser du CSS :

1. le CSS inline :
  À éviter de manière générale, car il mélange la structure HTML avec les styles, ce qui rend le code moins maintenable et réutilisable.

2. la feuille de styles CSS :
  Utiliser une feuille de styles CSS externe permet de séparer les préoccupations, de rendre le code plus organisé et plus facile à maintenir. Les styles peuvent être réutilisés sur plusieurs pages.

3. Les frameworks CSS :
  Les frameworks CSS tels que Bootstrap, Materialize CSS, et Tailwind CSS offrent des composants prédéfinis et des classes utilitaires pour faciliter et accélérer le développement d'interfaces utilisateur. Ils sont utiles pour des projets où la rapidité de développement est importante, mais ils peuvent aussi entraîner un surpoids en termes de taille de fichier et de styles non utilisés.

4. Préprocesseur CSS - SASS :
  Les préprocesseurs CSS comme SASS permettent d'écrire du CSS avec des fonctionnalités avancées telles que les variables, les mixins, et les fonctions. Cela rend l'écriture et la gestion du CSS plus efficaces et modulaires.

5. Les modules CSS :
  Les modules CSS sont une approche de modularité pour les feuilles de styles CSS. Ils permettent d'encapsuler les styles au niveau des composants, ce qui évite les conflits de noms de classe et facilite la maintenance des styles. Les modules CSS sont souvent utilisés dans les applications React grâce à des outils tels que CSS Modules ou les fonctionnalités natives de certains frameworks comme Next.js.
*/
