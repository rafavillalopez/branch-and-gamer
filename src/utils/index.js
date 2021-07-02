import axios from "axios";

export const aumentarCantidad = (state, action) => {
  return state.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
};

export const disminuirCantidad = (state, action) => {
  return state.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};

export const isInCarItems = (carItems, id) => {
  return carItems.some((item) => {
    return item.productId === id;
  });
};

export const getProductFromDb = async (array) => {
  const products = await Promise.all(
    array.map((x) => axios.get(`/api/products/${x.productId}`))
  );

  const r = products.map((x) => x.data);

  r.forEach((product, i) => {
    product.quantity = array[i].quantity;
  });

  return r;
};
