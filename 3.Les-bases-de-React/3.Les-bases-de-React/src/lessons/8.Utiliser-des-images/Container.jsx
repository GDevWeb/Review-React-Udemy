import { useState } from "react";
import fujiPicture from "./assets/fuji.jpg";
import iconTriangle from "./assets/triangle.svg";

export default function Container() {
  // State :
  const [initialIdPicture, setInitialIdPicture] = useState(1);

  // Comportement :
  const nextPicture = () => {
    setInitialIdPicture((currentValue) =>
      currentValue === 3 ? 1 : currentValue + 1
    );
  };

  return (
    <div>
      <h1>Utiliser des images</h1>

      <h2>Images JPEG, WEBP, PNG</h2>
      <img src={fujiPicture} alt="Mont Fuji" />

      <h3>Utiliser des images du dossier public</h3>
      <p>
        On utilise le dossier assets seulement lorsque l'on veut référencer
        dynamiquement la source
      </p>
      {/* <img src="/assets/forest-1.jpg" alt="" srcset="" /> */}

      <h3>Pseudo carrousel :</h3>
      <img
        src={`/public/assets/forest-${initialIdPicture}.jpg`}
        alt="Image du paysage"
      />
      <button onClick={nextPicture}>Next picture</button>

      <h3>Les icônes - SVG</h3>
      <img src={iconTriangle} alt="Icône d'un triangle" />
    </div>
  );
}

/* 
CQFD - Utiliser des images avec React :

1. Utilisation d'images JPEG, WEBP, PNG :
   Les images de ces formats peuvent être importées directement dans le code source à l'aide de la syntaxe d'importation ES6. Elles peuvent ensuite être affichées dans les composants JSX à l'aide de la balise <img>.

2. Utilisation d'images du dossier public :
   Le dossier public est utilisé lorsque l'on veut référencer dynamiquement la source des images. Cela peut être utile dans certains cas, mais l'utilisation d'importations est généralement préférée pour un meilleur contrôle et une gestion plus efficace des ressources.

3. Pseudo carrousel :
   Dans cet exemple, un pseudo carrousel est implémenté en changeant dynamiquement la source de l'image en fonction de l'état actuel. Cela est réalisé en utilisant un état pour suivre l'ID de l'image actuelle, puis en changeant cet état lorsqu'on clique sur un bouton.

4. Utilisation d'icônes - SVG :
   Les icônes au format SVG peuvent également être importées et affichées dans les composants React de la même manière que les images JPEG, WEBP, PNG. Cependant, elles offrent souvent une meilleure qualité et une plus grande flexibilité en termes de redimensionnement et de manipulation.
*/
