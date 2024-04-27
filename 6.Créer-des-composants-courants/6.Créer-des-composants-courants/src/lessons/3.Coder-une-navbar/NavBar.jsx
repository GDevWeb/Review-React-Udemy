import React, { useState } from "react";
import hamburger from "./assets/hamburger.svg";
import close from "./assets/close.svg";

export default function NavBar() {
  // 1.State:
  const [showMenu, SetShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-slate-200">
      <ul
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col items-center justify-center bg-slate-200 w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 `}
      >
        <li>
          <a className="inline-block py-2 mx-4 text-lg sm:py-0" href="#">
            Accueil
          </a>
        </li>
        <li>
          <a className="inline-block py-2 mx-4 text-lg sm:py-0" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="inline-block py-2 mx-4 text-lg sm:py-0" href="#">
            Tarifs
          </a>
        </li>
        <li>
          <a className="inline-block py-2 mx-4 text-lg sm:py-0" href="#">
            Contact
          </a>
        </li>
      </ul>
      <button
        className="ml-auto sm:hidden"
        onClick={() => SetShowMenu(!showMenu)}
      >
        {showMenu ? 
        (
          <img
            className="w-4"
            src={close}
            alt="icône hamburger fermer menu de navigation"
          />
        ) : (
          <img
            className="w-4"
            src={hamburger}
            alt="icône hamburger ouvrir menu de navigation"
          />
        )}
      </button>
    </nav>
  );
}
