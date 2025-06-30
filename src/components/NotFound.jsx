import React from "react";
import { Link } from "react-router-dom"; // Make sure React Router is set up
import notFoundImage from "../assets/NOTFOUND.svg";

const NotFound = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <img
        src={notFoundImage}
        alt="Not Found"
        style={{ width: "500px", height: "auto" }}
      />
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      
      <Link to="/" style={{
        display: "inline-block",
        marginTop: "1.5rem",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#fa7939",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "4px",
        fontSize: "1rem"
      }}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
