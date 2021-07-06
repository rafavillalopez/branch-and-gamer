import useLocalStorage from "../hooks/useLocalStorage";

const useCart = () => {
  const [cart, dispatch] = useLocalStorage("cart-items-no-log", []);

  const addToCart = (id) => {
    dispatch({ type: "add", playload: { productId: id, quantity: 1 } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "remove", playload: { id } });
  };

  const addOneToCart = (id) => {
    dispatch({ type: "quantityAdd", playload: { id } });
  };

  const removeOneFromCart = (id) => {
    dispatch({ type: "quantityRemove", playload: { id } });
  };

  return { cart, addToCart, removeFromCart, addOneToCart, removeOneFromCart };
};

export default useCart;
