import React, { useEffect } from "react";
import ToggleTheme from "../ToggleThemeButton/ToggleThemeButton";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemePRovider";

export default function Content() {
  // 1.State:
  useEffect(() => {
    document.title = "Context - Dark/Light mode";
  }, []);

  const {darkMode} = useContext(ThemeContext)

  // 2.Behavior:

  // 3.Render:
  return (
    <div className="container">
      <h1>You are in {darkMode ? "Dark" : "Light"} mode</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sit
        adipisci incidunt et ipsam debitis, alias distinctio cupiditate
        sapiente, dicta, iusto architecto expedita tempore molestiae harum
        doloremque ea temporibus! Vel ea dolorem ad aspernatur enim fugit
        aliquam repellendus reiciendis mollitia, assumenda quod ratione
        laboriosam ducimus molestiae autem, quidem excepturi iste voluptate
        vitae! Saepe ipsam dolore molestiae, aliquid animi ea dolorum eligendi
        soluta nisi necessitatibus itaque illo. Facilis minima corrupti itaque
        repellendus quisquam tempore distinctio ea veritatis cumque deleniti,
        modi, voluptatum, error omnis repellat. Doloribus repudiandae provident
        at, ex cum soluta magnam natus eum enim laborum, quasi tempora,
        perferendis non accusantium!
      </p>
      <ToggleTheme />
    </div>
  );
}
