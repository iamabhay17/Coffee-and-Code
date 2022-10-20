import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer bg="light" className="text-center text-lg-left">
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Coffee & Code
        </Link>
      </div>
    </footer>
  );
}
