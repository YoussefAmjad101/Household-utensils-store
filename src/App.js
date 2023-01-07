import { useState, useEffect } from "react";

import Banner from "./components/banner";
import Cart from "./components/cart";
import Footer from "./components/footer";
import ShoppingList from "./components/shopping_list";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container">
      <div className="row">
        <Banner>
        <h1 className="d-flex justify-content-end p-5">Morrocan Household Utensils Store</h1>
      </Banner>
      </div>
      <div class="divider py-1 bg-secondary"></div>
      <div className="row">
        <div className="col-2 my-4 mx-2">
          <Cart cart={cart} updateCart={updateCart} />
        </div>
        <div className="col-9 my-4 mx-2">
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;