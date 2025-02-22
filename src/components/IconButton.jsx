import React from "react";

const IconButton = ({ icon, type, onClick }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="p-2 rounded bg-blue-500 text-white flex items-center gap-2"
      >
        {icon && <span className="text-xl">{icon}</span>}
        {type === "submit" ? "Submit" : type === "reset" ? "Reset" : "Button"}
      </button>
    );
  }; export default IconButton;
  