import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid px-2">

    {/* Brand */}
    <Link className="navbar-brand fw-bold fs-3 me-3" to="/">
      News
    </Link>

    {/* Toggle */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Links */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex align-items-center fw-bold fs-5">

        <li className="nav-item">
          <Link className="nav-link px-2" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2" to="/technology">Technology</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
