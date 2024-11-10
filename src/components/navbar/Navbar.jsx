import React from 'react';
import './navbar.css';
import { CiBookmarkPlus } from "react-icons/ci";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <b><CiBookmarkPlus /> todo</b>
          </Link>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active mx-2">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/todo">Todo</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link btn-nav" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link btn-nav" to="/login">Login</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link btn-nav" to="#">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
