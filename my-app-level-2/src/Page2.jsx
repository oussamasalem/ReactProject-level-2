import { useContext } from "react";
import DataContext from './context/DataContext';
import "./theme.css"
const Page2 = () => {
  const {name,theme} = useContext(DataContext);
  return (
    <div className={`App ${theme}`}>
      <h2>Page 2  </h2>
      <h1>i'm {name}</h1>
    </div>
  );
}

export default Page2;
