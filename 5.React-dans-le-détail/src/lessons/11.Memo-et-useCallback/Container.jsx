import { useEffect, useState, useCallback } from "react";
import Card from "./Card";
export default function Container() {
  // 1.State:

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "11.Memo-et-useCallback";
  }, []);

  // 2.Comportement:
  // function customLog(){
  //   console.log("Hello");
  // }

  const customLog = useCallback(() => console.log("Bonjour"),[]);

  // 3.Render :
  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card
        text={"test"} /*pas de changement de test donc memo fait le travail*/
        // text={count} //il y a bien un render à chaque changement de state
        customLog={customLog}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
