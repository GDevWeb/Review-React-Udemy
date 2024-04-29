import React from "react";
import { createContext, useState } from "react";

/* Mise en place du context et fournit un provider */
export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

/* 
Toggle Theme provider Notes :


un composant d'ordre supérieur retourne un autre composant

a higher component returns another component



*/
