import { useEffect } from "react";
import spinner from "./spinner.svg";
import useAPI from "./Hooks/useAPI";

export default function Container() {
  // 1.State :
  const titlePage = "14.Hook-personnalisé";
  useEffect(() => {
    document.title = titlePage;
  }, []);

  const { catData, error, loading } = useAPI();

  // 2.Behavior:

  let content;

  if (loading && !error) {
    content = <img src={spinner} alt="icône de chargement" />;
  } else if (error) {
    content = <p>Une erreur est survenue</p>;
  } else if (catData) {
    content = <img src={catData[0].url} alt="photo d'un chat" />;
  }

  // 3.Render :
  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {content}
    </div>
  );
}
