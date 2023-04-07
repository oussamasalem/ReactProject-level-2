import "./App.css";
import "./theme.css"
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("oussama");
  const [age, setAge] = useState(28);
  const [count, setCount] = useState(0);
  const [theme, settheme] = useState("");
  return (
    <div className={`App ${theme}`}>
      <div>
        <button style={{marginRight:"15px"}}  onClick={()=>{settheme("")}}>light</button>
        <button style={{marginRight:"15px"}}  onClick={()=>{settheme("dark")}}>dark</button>
        <button  style={{marginRight:"15px"}}  onClick={()=>{settheme("pink")}}>pink</button>
        <button onClick={()=>{settheme("grey")}}>grey</button>
      </div>



      <h1>my name is {name}</h1>
      <button
        onClick={() => {
          setName("sfifha ♣♦☺☻♥");
        }}
      >
        Change Name
      </button>

      <h1>my name is {age}</h1>
      <button
        onClick={() => {
          setAge(23);
        }}
      >
        Change Age
      </button>
      <br />
      <br />
      <br />

      <button onClick={()=>{setCount(count+1)}}>count {count}</button>
    </div>
  );
}

export default App;
