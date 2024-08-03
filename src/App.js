import React from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import store from "./Components/redux/store";
import { Provider } from "react-redux";

const App = () => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
