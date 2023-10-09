import React from "react";
import { data } from "../utils/data";

export const globalCtx = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  // const [cart,setCart] = React.useState([]);

React.useEffect(() => {
  setProducts(data);
},[])

  return (
    <globalCtx.Provider
      value={{
        products,
      }}
    >
      {children}
    </globalCtx.Provider>
  );
};

export const useGlobalCtx = () => {
  return React.useContext(globalCtx);
};
