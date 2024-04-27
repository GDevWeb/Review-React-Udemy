import React, { useState } from "react";
import Pseudo from "./Pseudo";
import Password from "./Password";
import Confirmation from "./Confirmation";
import { object } from "prop-types";

export default function Validation() {
  // 1.State:
  const [inputsStates, setInputsStates] = useState({
    pseudo: "",
    password: "",
    passwordConfirmation: "",
  });

  console.log(inputsStates);

  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });

  const [isValidForm, setIsValidForm] = useState(false);
  // 2.Behavior:

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prevent submitted form !");

    if (validationCheck) {
      validationCheck();
      console.log("Envoi du formulaire !");
    }
  };

  const validationCheck = () => {
    const areValid = {
      pseudo: false,
      password: false,
      passwordConfirmation: false,
    };

    if (inputsStates.pseudo.length < 3 || inputsStates.pseudo.length > 64) {
      setShowValidation((state) => ({ ...state, pseudo: true }));
    } else {
      areValid.pseudo = true;
      setShowValidation((state) => ({ ...state, pseudo: false }));
    }

    if (inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)) {
      setShowValidation((state) => ({ ...state, password: true }));
    } else {
      areValid.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }

    if (inputsStates.passwordConfirmation !== inputsStates.password) {
      setShowValidation((state) => ({ ...state, passwordConfirmation: true }));
    } else {
      areValid.passwordConfirmation = true;
      setShowValidation((state) => ({ ...state, passwordConfirmation: false }));
    }

    if (Object.values(areValid).every((values) => values === true)) {
      setIsValidForm(true);
      setInputsStates({
        pseudo: "",
        password: "",
        passwordConfirmation: "",
      });
      return true;
    } else {
      return false;
    }
  };
  // 3.Render:
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-10 border rounded"
    >
      <p className="text-slate-100 text-xl mb-6">
        Créer votre nom d'utilisateur et votre mot de passe
      </p>

      <Pseudo
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
        value={inputsStates.pseudo}
      />
      <Password
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
        value={inputsStates.password}
      />
      <Confirmation
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
        value={inputsStates.passwordConfirmation}
      />

      <button className="mt-10 bg-slate-100 px-4 py-2 min-w:[125px] rounded">
        Valider
      </button>
      {isValidForm && (
        <p className="text-center text-green-600 font-bolder mt-2">
          Le formulaire a bien été envoyé
        </p>
      )}
    </form>
  );
}
