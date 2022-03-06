import React from "react";

function CartResult(props) {
  const { cart } = props;
  const showTotalValue = (cart) => {
    let result = 0;
    for (var i = 0; i < cart.length; i++) {
      result += cart[i].product.price * cart[i].quanlity;
    }
    return result.toLocaleString();
  };
  return (
    <tr>
      <td colSpan="3"></td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{showTotalValue(cart)} VNĐ</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
        >
          Hoàn tất thanh toán
          <i className="fa fa-angle-right right"></i>
        </button>
      </td>
    </tr>
  );
}

export default CartResult;
