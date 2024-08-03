import React from "react";
import { useDispatch } from "react-redux";
import addToCart from "./redux/action";
import { connect, useSelector } from "react-redux";
const ProductList = () => {
  const dispatch = useDispatch();

  const produts = [
    { id: 1, name: "Product1", price: 20 },
    { id: 2, name: "product2", price: 30 },
    { id: 3, name: "product3", price: 40 },
    { id: 4, name: "product4", price: 50 },
  ];

  return (
    <>
      <div>
        <h2>ProductList</h2>
        <ul>
          {produts.map((product) => {
            <li key={product.id}>
              {product.name}-${product.price}
              <button onClick={() => dispatch(addToCart(product))}>
                Add To Cart..
              </button>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (product) => dispatch(addToCart(product)),
// });
// export default connect(null,mapDispatchToProps)(ProductList);
export default ProductList;
