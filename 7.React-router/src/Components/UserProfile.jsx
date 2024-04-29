import { useParams } from "react-router-dom";

export default function UserProfile() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <p className="text-4xl font-extrabold text-center py-6 bg-slate-400">
        Your profile :{params.id}
      </p>
    </>
  );
}
