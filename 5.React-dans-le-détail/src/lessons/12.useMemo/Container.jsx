import { useEffect, useState } from "react";
import Calculation from "./Calculation";
import "./Container.css";

export default function Container() {
  // 1.State :
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = "12.useMemo"
  },[])
  
  // 2.Comportement:
  
  // 3.Render:

  return (
    <div>
      <h1>useMemo</h1>
      <Calculation />
      {count}
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  );
}
