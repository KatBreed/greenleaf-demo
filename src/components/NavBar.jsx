import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleNavBar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3 shadow-sm">
      <NavLink className="navbar-brand fw-bold text-success" to="/">
        GreenLeaf Gardens Demo
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavBar}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <li className="nav-item" key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                end={item === "Home"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold text-success" : ""}`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
