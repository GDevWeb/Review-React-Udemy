export default function Container() {

  const handleClick = () => console.log("Click Right");
  
  const handleClickWithId = (id) => console.log("Click Right", id);

  const handleClickWithIdAndEventObject = (e,id) => console.log("Click Right", e,id);
  
  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}

      {/* Mauvaise pratique, peu maintenable */}
      <button onClick={()=> console.log("click")}>Click</button>


      {/* On lui préfère en général ceci */}
    <button onClick={handleClick}>Click Right</button>

      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClickWithId(123566)}>Click Right</button>


      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button onClick={(e) => handleClickWithIdAndEventObject(e,123566)}>Click Right</button>


    </div>
  )
}
