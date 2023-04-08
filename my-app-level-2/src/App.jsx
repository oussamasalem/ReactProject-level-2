import { Link } from "react-router-dom";
import "./App.css";
import "./theme.css";
// import  { useState } from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME":
//       return {...state, name: action.newValue};
//     case "CHANGE_AGE":
//       return {...state,age:action.newValue}
//     case "COUNTER_INCREMENT":
//       return {...state,startCount:action.newValue}
//     case "CHANGE_THEME":
//       return {...state,theme:action.newValue}

//     default:
//       return state;
//   }
// };

function App() {
  const { name, changeName, age, startCount ,changeAge, theme, changeTheme,increment } =
    useContext(DataContext);

  return (
    <div className={`App ${theme}`}>
      <Link style={{ margin: "45px auto" }} to="/page2">
        page 2
      </Link>

      <div
        className="btn-container"
        style={{ marginBottom: "45px" }}
        onChange={() => {
          changeTheme(theme=="dark"?"light":"dark")
        }}
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      {/* ======================================================================= */}

      <button style={{ marginBottom: "45px" }} onClick={() => {
          changeTheme(theme=="dark"?"light":"dark")
        }}>Toggle Theme</button>

      {/* ======================================================================= */}

      <div>
        <button style={{ marginRight: "15px" }} onClick={()=>{
          changeTheme("light")
        }}>light</button>
        <button style={{ marginRight: "15px" }} onClick={()=>{
          changeTheme("dark")
        }}>dark</button>
        <button style={{ marginRight: "15px" }} onClick={()=>{
          changeTheme("pink")
        }}>pink</button>
        <button onClick={()=>{
          changeTheme("grey")
        }}>grey</button>
      </div>

      {/* ======================================================================= */}
      <h1>my name is {name} </h1>
      <button
        onClick={() => {
          changeName("SFIFHA ♫☼☻♥♣♀");
        }}
      >
        Change Name
      </button>
      {/* ======================================================================= */}

      <h1>my age is {age}</h1>
      <button
        onClick={() => {
          changeAge(88);
        }}
      >
        Change Age{" "}
      </button>
      <br />
      <br />
      <br />
      {/* ======================================================================= */}

      <button onClick={()=>{
        increment(startCount+1)
      }}>count {startCount}</button>
    </div>
  );
}

export default App;
