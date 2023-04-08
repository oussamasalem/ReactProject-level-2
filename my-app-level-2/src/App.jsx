import "./App.css";
import "./theme.css";
// import  { useState } from "react";
import { useReducer } from "react";


const initialData = {name:"oussama",age:28,startCount:0,theme:"light"};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {...state, name: action.newValue};
    case "CHANGE_AGE":
      return {...state,age:action.newValue}
    case "COUNTER_INCREMENT":
      return {...state,startCount:action.newValue}
    case "CHANGE_THEME":
      return {...state,theme:action.newValue}

    default:
      return state;
  }
};







function App() {
  
  
  const [allData, dispatch] = useReducer(reducer, initialData);
  
  
  return (
    <div className={`App ${allData.theme}`} onChange={()=>{
      dispatch({type:"CHANGE_THEME",newValue:allData.theme ==""?"dark":""})
    }}>
      <div className="btn-container" style={{ marginBottom: "45px" }}>
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

      <button style={{ marginBottom: "45px" }} onClick={()=>{
        dispatch({type:"CHANGE_THEME",newValue:allData.theme ==""?"dark":""})
      }}>Toggle Theme</button>
      
      
      {/* ======================================================================= */}
      
      <div>
        <button style={{ marginRight: "15px" }} onClick={()=>{
          dispatch({type:"CHANGE_THEME",newValue:"light"})
        }}>light</button>
        <button style={{ marginRight: "15px" }} onClick={()=>{
          dispatch({type:"CHANGE_THEME",newValue:"dark"})
        }}>dark</button>
        <button style={{ marginRight: "15px" }} onClick={()=>{
          dispatch({type:"CHANGE_THEME",newValue:"pink"})
        }}>pink</button>
        <button onClick={()=>{
          dispatch({type:"CHANGE_THEME",newValue:"grey"})
        }}>grey</button>
      </div>
      {/* ======================================================================= */}
      <h1>my name is {allData.name}</h1>
      <button onClick={()=>{
        dispatch({ type: "CHANGE_NAME", newValue:"sfifha ♣ ♦ ☺ ☻ ♥" })
      }}>Change Name</button>
      {/* ======================================================================= */}

      <h1>my age is {allData.age} </h1>
      <button onClick={()=>{
        dispatch({type:"CHANGE_AGE",newValue:22})
      }}>Change Age </button>
      <br />
      <br />
      <br />
      {/* ======================================================================= */}

      <button onClick={()=>{
        dispatch({type:"COUNTER_INCREMENT",newValue:allData.startCount+1})
      }}>count  {allData.startCount}</button>
    </div>
  );
}

export default App;
