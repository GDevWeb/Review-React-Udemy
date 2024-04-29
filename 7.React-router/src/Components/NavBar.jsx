import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="p-2 text-right bg-slate-300">
      <NavLink to="/" className="mx-2 text-md text-slate-800 text-semibold">
        Home
      </NavLink>
      {/* <NavLink to="/" className={({isActive}) => `${isActive && "bg-amber-400 mx-2 text-md text-semibold"}`}>
        Home
      </NavLink> */}
      <Link
        state={{ txt: "State" }}
        to="/contact"
        className="mx-2 text-md text-slate-800 text-semibold"
      >
        Contact
      </Link>
      <Link
        state={{ txt: "State" }}
        to="/analytics"
        className="mx-2 text-md text-slate-800 text-semibold"
      >
        Analytics
      </Link>
    </nav>
  );
}

/* 
NavLink permet d'ajouter du style au lien de page active par le biais de la fonction isActive
*/
