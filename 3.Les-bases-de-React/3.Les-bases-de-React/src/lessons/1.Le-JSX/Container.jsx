import React from 'react'

function Container() {
    // 1.State :
    
    
    // 2.Comportement :
    const handleClick = () => {
        alert("Click")
    }
    
    // 3.Render
  return (
    <>
    <p>Hello world Container</p>

    <h2>Les possibilités du JSX :</h2>
    <h3>Des chaînes de caractères et leur méthodes</h3>
    <p>{"le gros chien".toUpperCase()}</p>
    <h3>Des calculs</h3>
    <p>Salut combien font 10 + 10 = {10 +10}</p>
    <h3>des conditions</h3>
    <p>10 plus petite que 20{10 < 20 ? " Vrai" : "Faux"}</p>
    <h3>Des events dit en ligne</h3>
    <p>Attention, sous le capot React appel addEventListener et n'effectue pas du JS inline</p>
    <button onClick={()=>alert("Click")}>Click me</button>
    <p>En temps normal, il est toujours préférable de passer de vraies fonctions et non par des fonctions anonymes

        Voir exemple ci dessous :
    </p>
    <button onClick={handleClick}>Click me</button>


    </>
  )
}

export default Container