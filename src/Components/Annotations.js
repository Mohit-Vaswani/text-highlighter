import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Annotation() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
    setNavbarOpen(!navbarOpen);
  };

  return (
    <sidebar
      className={`sidebar newBackground  ${navbarOpen ? " onCLickingCss" : ""}`}
    >
      {/* <nav className={`navbar ${navbarOpen ? " onCLickingCss" : ""}`}> */}
      <nav className="navbar">
        <h2 className={`${navbarOpen ? " forText" : ""}`}>Annotation</h2>
        <button className="nav-toggle" onClick={handleToggle}>
          {navbarOpen ? <FaBars /> : <GrClose />}
        </button>
      </nav>
    </sidebar>
  );
}

export default Annotation;
