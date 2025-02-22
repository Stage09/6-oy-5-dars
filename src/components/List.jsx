import React from "react";

const List = ({ items }) => (
  <ul className="list-disc pl-5">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
