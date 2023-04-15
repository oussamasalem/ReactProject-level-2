import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { theme: localStorage.getItem("theme") === null ?"light": localStorage.getItem("theme") === "dark" ? "dark":"light" };
const reducer = (firstState,action) => {
  switch(action.type){
    case "CHANGE_THEME":
      return {...firstState,theme:action.newValue};

    default:
      return firstState;
  }
}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeTheme = (newTheme) => {
    dispatch({type:"CHANGE_THEME",newValue:newTheme})
    localStorage.setItem("theme",newTheme);
  }

  return (
     <ThemeContexttt.Provider value={{ ...firstState,changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;