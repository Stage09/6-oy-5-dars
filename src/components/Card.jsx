import React from "react";

const Card = (props) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {props.children}
    </div>
  );
};

export default Card;
