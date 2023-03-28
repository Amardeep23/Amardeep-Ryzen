import React from "react";
import logo from "../../assets/img/Logo.jpeg";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to='/'>
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width={40} />
          </a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/addUser">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Add a User
                </a>
              </li>
            </Link>
            <Link to="/viewUser">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  View all users
                </a>
              </li>
            </Link>
          </ul>
          <div className="profile">
            <form>
              <select name="" id="">
                <option value="My Profile">My Profile</option>
                <option value="My Profile">My Profile</option>
                <option value="My Profile">My Profile</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
