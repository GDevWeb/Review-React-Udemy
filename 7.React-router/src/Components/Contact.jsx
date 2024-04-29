import { useLocation } from "react-router-dom";
{
  /**permet de passer du state */
}

export default function Contact({ state }) {
  const data = useLocation();
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center py-6 bg-slate-400">
        Contact
      </h1>
      <p className="text-slate-100 text-center py-10">{data.state.txt}</p>
      {/* affichage du state */}
    </div>
  );
}
