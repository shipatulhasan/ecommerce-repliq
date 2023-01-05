// get cart form local storage

const getCart = () => {
  const storedCart = localStorage.getItem("shopping-cart");
  let shoppingCart = {};
  if (shoppingCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// add item to local storage

const addToDb = (id) => {
  const storedCart = getCart();
  //   check existing product
  if (storedCart[id]) {
    storedCart[id] = storedCart[id] + 1;
  } else {
    storedCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
};
// remove product from db
const removeFromDb = (id) => {
  const storedCart = getCart();
  if (storedCart[id]) {
    delete storedCart[id];
  }
  localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
};

// romve full cart from localstorage

const resetDb = ()=>{
    localStorage.removeItem('shopping-cart')
}

export { addToDb, getCart, removeFromDb,resetDb };
