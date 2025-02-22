import React from "react";

const Button = (props) => {
  return (
    <button 
      onClick={props.onClick} 
      className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
    >
      {props.children}
    </button>
  );
};

export default Button;
