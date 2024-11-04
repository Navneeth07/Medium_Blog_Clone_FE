import React from "react";

const CustomModal = (props) => {
  if (!props.isOpen) return null;

  const handleClose = (e) => {
    if (e.target.id === "modalWrapperId") {
      props.onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="modalWrapperId"
      onClick={handleClose}
    >
      <div className="w-[600px]">
        <div className="bg-white rounded p-2 shadow-2xl">
          <div className="flex justify-end items-end">
            <button
              className="font-extralight text-2xl"
              onClick={() => props.onClose()}
            >
              X
            </button>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
