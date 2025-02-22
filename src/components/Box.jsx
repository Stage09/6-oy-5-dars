import React from "react";

const Box = ({ width, height, color, children }) => (
  <div style={{ width, height, backgroundColor: color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}>
    {children}
  </div>
);

export default Box;
