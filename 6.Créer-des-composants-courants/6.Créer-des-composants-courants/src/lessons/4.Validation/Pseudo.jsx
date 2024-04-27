import React from "react";

export default function Pseudo({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="userName" className="text-slate-50">
        Votre pseudo (3 à 64 caractères)
      </label>
      <input
        type="text"
        id="userName"
        className="rounded w-full mt-2"
        value={inputsStates.pseudo}
        onChange={(e) =>
          setInputsStates({ ...inputsStates, pseudo: e.target.value })
        }
      />
      {showValidation.pseudo && (
        <p className="text-red-600 font-bolder">
          Votre pseudo doit contenir entre 3 et 64 caractères
        </p>
      )}
    </>
  );
}
