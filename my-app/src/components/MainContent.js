import React from "react";
import './MainContent.css'


const MainContent = ({PageName,designer}) => {


  return (
  <main>
    {PageName} Page
    <br />
    desinged by {designer}
  </main>
  
  );
};

export default MainContent;
