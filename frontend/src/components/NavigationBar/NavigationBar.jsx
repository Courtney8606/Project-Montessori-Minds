import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "/assets/Logo.jpeg";
import MainButton from "../Buttons/MainButton";

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar-content">
          <a className="navbar-brand" href="/">
            <img
              className="LogoImage"
              role="logoImg"
              alt="logo"
              src={logoImage}
            />
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/values"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  <MainButton
                    text="Values"
                    className="button-nav-bar"
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      color: "#00215e",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  <MainButton
                    text="Team"
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      color: "#00215e",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/rooms"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  <MainButton
                    text="Rooms"
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      color: "#00215e",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/food"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  <MainButton
                    text="Food"
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      color: "#00215e",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/outdoor"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  <MainButton
                    text="Outdoor Areas"
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      color: "#00215e",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  <MainButton
                    text="Contact"
                    style={{
                      backgroundColor: "transparent",
                      border: "None",
                      color: "#00215e",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
