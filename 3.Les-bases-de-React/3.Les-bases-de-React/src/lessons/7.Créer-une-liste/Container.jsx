export default function Container() {
  const data = [
    {
      id: 1,
      name: "Marie",
    },
    {
      id: 2,
      name: "Anne",
    },
    {
      id: 3,
      name: "Sarah",
    },
    {
      id: 4,
      name: "Béatrice",
    },
  ];

  // State :

  // Comportement :

  // Render :
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>

      <h2>Liste des membres :</h2>
      <ul>
        {data.map((element) => {
          return (
            <li key={element.id}>
              <p>Id : {element.id}</p>
              <p>Nom : {element.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* 
CQFD Afficher des Listes dynamiquement :

1. Utilisation de la méthode map() :
   La méthode map() est utilisée pour créer une liste d'éléments JSX à partir d'un tableau de données. Elle itère sur chaque élément du tableau et retourne un élément JSX correspondant.

2. Utilisation de la propriété key :
   Chaque élément de la liste générée par map() doit avoir une propriété key unique pour aider React à identifier les éléments et à optimiser leur rendu. Dans cet exemple, la propriété key est définie sur l'ID de chaque élément.

3. Affichage des données :
   Les données sont affichées dynamiquement en utilisant les propriétés de chaque élément du tableau. Dans cet exemple, chaque élément a une propriété ID et un nom, qui sont affichés à l'intérieur des éléments de liste <li>.

4. Utilisation de la syntaxe JSX dans la fonction map() :
   La fonction map() est utilisée à l'intérieur des balises JSX pour générer dynamiquement une liste d'éléments. Cette approche permet de créer des listes d'éléments JSX de manière concise et lisible.

5. Réactivité :
   Si les données sont susceptibles de changer, React se chargera automatiquement de mettre à jour l'interface utilisateur en fonction des nouvelles données.
*/
