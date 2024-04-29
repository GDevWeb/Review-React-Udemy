import { ThemeContext } from "../../context/ThemePRovider";
import { useContext } from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import "./ToggleThemeButton.css";

export default function ToggleTheme() {
  // 1.State:
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  // 2.Behavior:

  // 3.Render:

  return (
    <button onClick={toggleTheme} className="toggle-theme-btn">
      <span>Go {darkMode ? "Light" : "Dark"}</span>
      <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  );
}
