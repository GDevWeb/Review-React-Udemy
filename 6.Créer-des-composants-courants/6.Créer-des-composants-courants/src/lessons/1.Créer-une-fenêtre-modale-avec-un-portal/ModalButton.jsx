import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export default function ModalButton() {
  // 1.State:
  const [showModal, setShowModal] = useState(false);

  // 2.Behavior:

  // 3.Render:
  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="block mx-auto bg-slate-200 text-slate-900 p-2 rounded"
      >
        {showModal ? "Close the modal" : "Open the modal"}
      </button>
      {showModal &&
        createPortal(
          <ModalContent closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
