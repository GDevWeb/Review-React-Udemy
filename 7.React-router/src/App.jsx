import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import UserProfile from "./Components/UserProfile";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import Analytics from "./pages/Analytics/Analytics";
import Development from "./pages/Analytics/Development";
import CyberSecurity from "./pages/Analytics/CyberSecurity";
import UIUX from "./pages/Analytics/UIUX";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar /> {/*mise en place de la location*/}
        <Routes>
          {" "}
          {/*contient les route*/}
          <Route path="/" element={<Home />} />{" "}
          {/* redirection vers la page racine accueil */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* redirection vers la page racine contact et ainsi de suite */}
          <Route path="/profile/:id" element={<UserProfile />} />{" "}
          {/* redirection vers la page racine contact et ainsi de suite */}
          <Route path="/analytics" element={<Analytics />}>
            {/*routes imbriquées */}
            <Route
              path="/analytics/cybersecurity"
              element={<CyberSecurity />}
            />{" "}
            <Route path="/analytics/development" element={<Development />} />{" "}
            <Route path="/analytics/uiux" element={<UIUX />} />{" "}
          </Route>{" "}
          <Route path="*" element={<NotFound />} />{" "}
          {/* redirection vers la page d'erreur */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
