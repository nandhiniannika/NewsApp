import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-3 me-4" to="/">
          News
        </Link>

        {/* Toggle */}
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

        {/* Categories */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 fw-bold fs-5">

            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/business">Business</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/entertainment">Entertainment</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/health">Health</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/science">Science</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/sports">Sports</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/technology">Technology</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
