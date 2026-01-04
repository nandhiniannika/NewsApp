import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">News</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">

        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
           <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
           <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
     
    </div>
  </div>
</nav>
  );
};

export default Navbar;
