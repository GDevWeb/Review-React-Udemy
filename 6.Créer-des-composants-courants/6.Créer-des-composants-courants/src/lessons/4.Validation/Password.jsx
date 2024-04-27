import React from "react";

export default function Password({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="password" className="text-slate-50 inline-block mt-5">
        Saisissez votre mot de passe (au moins 1 chiffre et 6 caractères)
      </label>
      <input
        type="text"
        id="password"
        className="rounded w-full mt-2"
        value={inputsStates.password}
        onChange={(e) =>
          setInputsStates({ ...inputsStates, password: e.target.value })
        }
      />
      {showValidation.password && (
        <p className="text-red-600 font-bolder">
          Votre mot de passe doit contenir au moins 1 chiffre et 6 caractères
        </p>
      )}
    </>
  );
}
