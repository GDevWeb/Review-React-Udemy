import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p className="text-4xl font-extrabold text-center py-6 bg-red-400">
        Page NotFound 🤖
      </p>

      <div className="text-center">
        <Link to={"/"} className="text-slate-100">Back to homepage</Link>
      </div>
    </div>
  );
}
