import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex align-items-center">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          News
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-3 mb-2 mb-lg-0"> {/* Added ms-3 for space from brand */}

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/technology">Technology</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
