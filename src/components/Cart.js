import React from 'react';
import PropTypes from 'prop-types';

function Cart({ children }) {
    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </table>
            </div>
        </section>
    );
}
Cart.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Cart;
