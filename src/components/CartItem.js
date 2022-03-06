import React from "react";
import * as typeMessage from "./../constants/Message";

function CartItem(props) {
  const { item } = props;
  const { quanlity } = item;
  const handleUpdateQuanlity = (product, quanlity) => {
    const { onUpdateProductInCart, onChangeMessage } = props;
    onUpdateProductInCart(product, quanlity);
    onChangeMessage(typeMessage.MSG_UPDATE_CART_SUCCESS);
  };
  const deleteProductInCart = (product) => {
    const { onDeleteProductInCart, onChangeMessage } = props;
    onDeleteProductInCart(product);
    onChangeMessage(typeMessage.MSG_DELETE_PRODUCT_SUCCESS);
  };
  const showTotalValue = (price, quanlity) => {
    return (price * quanlity).toLocaleString();
  };

  return (
    <tr>
      <th scope="row">
        <img src={item.product.image} />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}VNĐ</td>
      <td className="center-on-small-only">
        <span className="qty">{quanlity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light"
            onClick={() =>
              handleUpdateQuanlity(item.product, item.quanlity - 1)
            }
          >
            <a>—</a>
          </label>
          <label
            className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light"
            onClick={() =>
              handleUpdateQuanlity(item.product, item.quanlity + 1)
            }
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{showTotalValue(item.product.price, item.quanlity)} VNĐ</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          onClick={() => deleteProductInCart(item.product)}
          title=""
          data-original-title="Remove item"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
