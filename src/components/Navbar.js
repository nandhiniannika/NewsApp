import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid d-flex align-items-center">

    {/* Brand */}
    <Link className="navbar-brand fw-bold fs-3 me-4" to="/">
      News
    </Link>

    {/* Toggler */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav fw-bold fs-5 gap-3">

        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
