import { useEffect } from "react";

export default function Container() {
  // 1.State:

  const titlePage = "16.Utiliser-TailwindCSS";
  useEffect(() => {
    document.title = titlePage;
  }, []);

  // 2.Comportement:

  // 3.Render:
  return (
    <div>
      <h1 className="bg-fuchsia-900">Utiliser Tailwind</h1>
    </div>
  );
}

/* 
CQFD utiliser tailWind CSS

https://tailwindcss.com/docs/guides/vite

*/
