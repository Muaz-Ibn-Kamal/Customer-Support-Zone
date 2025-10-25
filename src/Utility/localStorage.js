// Initially Get Cart To Local Storage
const getCartFromLs = () => {
  const getCart = localStorage.getItem("cart");
  if (getCart) {
    const storedCart = JSON.parse(getCart);
    return storedCart;
  }
  return [];
};

// Save Cart To Local Storage
const saveCartToLs = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// Add Item To Local Storage
const addCartToLs = (id) => {
  const cart = getCartFromLs(id);
  const newCart = [...cart, id];

  // Save Cart In newCart
  saveCartToLs(newCart);
};

// Remove Cart From Local Storage
const removeCartFromLs = (id) => {
  const getCartFromLS = getCartFromLs();
  const remainingCart = getCartFromLS.filter((storedId) => storedId !== id);
  saveCartToLs(remainingCart);
};

export { getCartFromLs, addCartToLs, removeCartFromLs };
