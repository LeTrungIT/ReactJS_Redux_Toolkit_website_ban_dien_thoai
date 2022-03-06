import React from "react";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import {
  DELETE_PRODUCT_IN_CART,
  UPDATE_PRODUCT_IN_CART,
} from "../features/Slice/cartSlice";
import { SHOW_MESSAGE } from "../features/Slice/messageSlice";

function CartContainer(props) {
  const cart = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  

  const onUpdateProductInCart = (product, quanlity) => {
    const action = UPDATE_PRODUCT_IN_CART({ product, quanlity });

    dispatch(action);
  };
  const onChangeMessage = (message) => {
    const action = SHOW_MESSAGE(message);
    dispatch(action);
  };
  const onDeleteProductInCart = (product) => {
    const action = DELETE_PRODUCT_IN_CART(product);
    dispatch(action);
  };
  const showCart = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onUpdateProductInCart={onUpdateProductInCart}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  };
  const showCartResult = (cart) => {
    var result = null;
    if (cart.length > 0) {
      return <CartResult cart={cart} />;
    }
    return result;
  };

  return (
    <Cart>
      {showCart(cart)}
      {showCartResult(cart)}
    </Cart>
  );
}
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        describe: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        star: PropTypes.number.isRequired,
      }).isRequired,

      quanlity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartContainer;
