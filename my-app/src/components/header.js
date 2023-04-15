import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
//firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/configuration";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const { theme, changeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div className="header">
      <header className={`hide-when-mobile`}>
        <h1>
          <Link to="/">Courses 4 Arab</Link>
        </h1>

        <div
          onChange={() => {
            changeTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="label">
            <i className="fas fa-moon" />
            <i className="fas fa-sun" />
            <div className="ball"></div>
          </label>
        </div>

        <ul className="flex">
          {user && (
            <li
              className="main-list"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    console.log("sign out done ");
                    navigate("/");
                  })
                  .catch((error) => {
                    console.log("sign out eroore ");
                  });
              }}
            >
              <NavLink className="main-link">Sign-Out</NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/about">
              About
              </NavLink>
      
            </li>
          )}

          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign-In
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                Sign-Up
              </NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Profile">
              Profile
              </NavLink>
            </li>
          )}
        </ul>
      </header>
      {/* <header
        className="show-when-mobile"
        style={{ backgroundColor: "#000ff5" }}
      >
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="www">Full Course</a>
              </li>
              <li>
                <a href="www">Crash Course</a>
              </li>
              <li>
                <a href="www">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="www">Full Course</a>
              </li>
              <li>
                <a href="www">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="www">project 1</a>
                  </li>
                  <li>
                    <a href="www">project 2</a>
                  </li>
                  <li>
                    <a href="www">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="www">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header> */}
    </div>
  );
};

export default Header;
