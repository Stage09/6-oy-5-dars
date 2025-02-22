import React from "react";

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
      <button 
        className="mt-4 px-4 py-2 bg-gray-400 text-white rounded" 
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default Modal;
