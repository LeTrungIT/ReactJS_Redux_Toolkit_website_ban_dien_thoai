import React from 'react';
import PropTypes from 'prop-types';

function Products({ children }) {
    return (
        <section className="section">
            <h1 className="section-heading project__title">Danh Sách Sản Phẩm</h1>
            <div className="row">{children}</div>
        </section>
    );
}
Products.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Products;
