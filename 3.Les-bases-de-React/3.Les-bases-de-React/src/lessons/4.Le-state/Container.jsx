import { useState } from "react"

export default function Container() {

  // State :
  const [count, setCount] = useState(0);

  // Comportement :
  const increment = () => setCount(count+1)

  // Render :
  return (
    <div>
      <h1>Le state</h1>
      <p>{count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  )
}

/* CQFD UseState :

1. C'est du destructuring de tableau
2. count est une variable qui ne peut être modifiée que par son setter setCount
3. setCount, par convention de nommage, on fera toujours précéder le nom de la variable par set + nomDeLaVariable

Best Practice 1 :
Ceci afin de ne pas muter le State  
Ceci évite les problèmes liés à la mutation directe du state, ce qui peut entraîner des comportements imprévus dans l'application.

*/
