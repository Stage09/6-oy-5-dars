import React from "react";

const StatusMessage = ({ isSuccess }) => (
  <p className={isSuccess ? "text-green-500" : "text-red-500"}>
    {isSuccess ? "Success!" : "Error!"}
  </p>
);

export default StatusMessage;
