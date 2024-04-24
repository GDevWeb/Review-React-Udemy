import { useEffect, useState } from "react";
import HugeContent from "./HugeContent";

export default function Container() {
  const titlePage = "Ajouter un évènement global";

  // 1.State :
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.title = titlePage;

    window.addEventListener("scroll", handleGlobalScroll);

    function handleGlobalScroll() {
      console.log("Scrolling !");
    }
    //nettoyage de l'évènement :
    return () => {
      console.log("Nettoyage de l'écouteur");
      window.removeEventListener("scroll", handleGlobalScroll);
    };
  }, []); //vide car pas de surveillance de valeur

  // 2.Comportement:

  // 3.Render :
  return (
    <div>
      <h1>Ajouter un évènement global</h1>

      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Cacher l'article" : "Afficher l'article"}
      </button>

      {showContent && <HugeContent />}
    </div>
  );
}

/* 
CQFD Ajouter-un-évènement-global

*/
