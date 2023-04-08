import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { name: "oussama", age: 28, startCount: 0, theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {...state, name: action.newValue};
    case "CHANGE_AGE":
      return {...state,age: action.newValue}
    case "COUNTER_INCREMENT":
      return {...state,startCount:action.newValue}
    case "CHANGE_THEME":
      return {...state,theme:action.newValue}

    default:
      return state;
  }
};


export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = (newName) => {
    dispatch({type:"CHANGE_NAME",newValue:newName})
  }
  const changeAge = (newAge) => {
    dispatch({type:"CHANGE_AGE",newValue:newAge})
  }
  const changeTheme = (newTheme) => {
    dispatch({type:"CHANGE_THEME",newValue:newTheme})
  }
  const increment = (NewCount) => {
    dispatch({type:"COUNTER_INCREMENT",newValue:NewCount})
  }

  return (
    <ThemeContexttt.Provider value={{ ...firstState ,changeName,changeAge,changeTheme,increment}}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default  ThemeContexttt;
