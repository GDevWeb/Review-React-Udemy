import React from "react";

export default function Confirmation({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="confirmation" className="text-slate-50 inline-block mt-5">
        Confirmez votre mot de passe
      </label>
      <input
        type="text"
        id="confirmation"
        className="rounded w-full mt-2"
        value={inputsStates.passwordConfirmation}
        onChange={(e) =>
          setInputsStates({
            ...inputsStates,
            passwordConfirmation: e.target.value,
          })
        }
      />
      {showValidation.passwordConfirmation && (
        <p className="text-red-600 font-bolder">
          Les mots de passe ne sont pas identiques !
        </p>
      )}
    </>
  );
}
