import React from "react";
import Product from "./../components/Product";
import Products from "./../components/Products";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ADD_TO_CART } from "../features/Slice/cartSlice";
import { SHOW_MESSAGE } from "../features/Slice/messageSlice";
import { useDispatch } from "react-redux";

function ProductsContainer(props) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    const action = ADD_TO_CART(product);
    dispatch(action);
  };
  const onChangeMessage = (message) => {
    const action = SHOW_MESSAGE(message);
    dispatch(action);
  };
  const showProduct = (products) => {
    let result = null;

    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  };

  return <Products>{showProduct(products)}</Products>;
}

ProductsContainer.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      describe: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      star: PropTypes.number.isRequired,
    })
  ),
};


export default ProductsContainer;
