import { useEffect, useState } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  // 1.State :
  const [APIState, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    // document.title = "Appeler une A.P.I";

    setAPIState({ ...APIState, loading: true }); // Mettre l'état de chargement à true

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json()) // Récupérer les données JSON
      .then((data) => {
        console.log(data);
        setAPIState({ loading: false, error: false, data: data });
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setAPIState({ loading: false, error: true, data: undefined });
      });
  }, []);
  // 2.Comportement:

  let content;

  if (APIState.loading)
    content = <img src={spinner} alt="icône de chargement" />;
  else if (APIState.error) content = <p>Une erreur est survenue !</p>;
  else if (APIState.data?.length > 0) {
    content = (
      <ul>
        {APIState.data.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.url} alt={item.id} />
            </li>
          );
        })}
      </ul>
    );
  } else if (APIState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée !</p>;
  }

  // 3.Render :
  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
