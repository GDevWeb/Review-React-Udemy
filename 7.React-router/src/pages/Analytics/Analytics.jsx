import React from "react";
import { Link,Outlet } from "react-router-dom";

export default function Analytics() {
  return (
    <div className="bg-slate-600">
      <div className="mx-4xl text-slate-100 text-center">
        <p className="text-2xl py-10 mb-6">Here is the company Analytics </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          numquam itaque voluptatibus quasi sit sed voluptatum eos eveniet
          accusamus quod accusantium commodi esse officia iusto quis,
          dignissimos id recusandae doloribus!
        </p>
        <nav className="bg-slate-300 mb-10 text-slate-600">
          <Link
            to={"/analytics/cybersecurity"}
            className="mx-2 font-semibold text-lg"
          >
            CyberSecurity
          </Link>
          <Link
            to={"/analytics/development"}
            className="mx-2 font-semibold text-lg"
          >
            Development
          </Link>
          <Link to={"/analytics/uiux"} className="mx-2 font-semibold text-lg">
            UI/UX
          </Link>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
}
