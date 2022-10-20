import React from "react";
import { Image } from "react-bootstrap";

const ComingSoon = () => {
  return (
    <div
      className="m-1 container"
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={require("../assets/comingsoon.png")} alt="dont" fluid />
    </div>
  );
};

export default ComingSoon;
