import React from "react";

const ErrorMessage = ({ message }) => {
  return <div className="alert alert-danger text-center my-5">{message}</div>;
};

export default ErrorMessage;
