import React from 'react';
import * as message from './../constants/Message';

function Product(props) {
    const { product } = props;
    const star = product.star;
    const showStar = () => {
        const result = [];
        for (var i = 1; i <= star; i++) {
            result.push(<i className="fa fa-star"></i>);
        }
        for (var j = 1; j <= 5 - star; j++) {
            result.push(<i className="fa fa-star-o"></i>);
        }
        return result;
    };
    const handleAddToCart = (product) => {
        const { onAddToCart, onChangeMessage } = props;
        onAddToCart(product);
        onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS);
    };
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                    <a>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>{showStar()}</li>
                    </ul>
                    <p className="card-text">{product.describe}</p>
                    <div className="card-footer">
                        <span className="left">{product.price.toLocaleString()} VNĐ</span>
                        <span className="right">
                            <label
                                className="btn-floating blue-gradient"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add to Cart"
                            >
                                <i className="fa fa-shopping-cart" onClick={() => handleAddToCart(product)}></i>
                            </label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;
