import { useEffect } from "react";
import "./Container.css";
import styles from "./Container.module.css";

export default function Container() {
  // 1.State:

  console.log(styles);
  
  const titlePage = "Les C.S.S modules";
  useEffect(() => {
    document.title = titlePage;
  }, []);

  // 2.Behavior:

  // 3.Render:

  return (
    <div>
      <h1 className={styles.title}>CSS Modules</h1>
    </div>
  );
}

/*CQFD les modules CSS
 
 À connaître juste pour ma culture personnelle.
 Il faut préférer du bon CSS
 
 */
