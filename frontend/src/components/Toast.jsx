import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, msg }) => {
  return <Alert variant={variant}>{msg}</Alert>;
};

Message.defaultProps = {
  variant: "danger",
};

export default Message;
