import React from "react";
import { data } from "../utils/data";

export const globalCtx = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  React.useEffect(() => {
    setProducts(data);
  }, []);

  console.log(cart)
  return (
    <globalCtx.Provider
      value={{
        products,
        cart,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </globalCtx.Provider>
  );
};

export const useGlobalCtx = () => {
  return React.useContext(globalCtx);
};
