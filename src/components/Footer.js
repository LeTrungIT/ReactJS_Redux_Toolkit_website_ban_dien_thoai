import React from 'react';

function Footer() {
    return (
        <footer className="page-footer center-on-small-only">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 ml-auto">
                        <h5 className="title social-section-title">Mạng xã hội</h5>
                        <div className="social-section text-md-left">
                            <ul className="text-center">
                                <li>
                                    <a className="btn-floating  btn-fb waves-effect waves-light">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-ins waves-effect waves-light">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-tw waves-effect waves-light">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-yt waves-effect waves-light">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-li waves-effect waves-light">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-dribbble waves-effect waves-light">
                                        <i className="fa fa-dribbble left"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-pin waves-effect waves-light">
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-gplus waves-effect waves-light">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Giao hàng</h5>
                        <ul>
                            <li>
                                <a>Giao hàng trực tiếp</a>
                            </li>
                            <li>
                                <a>Giao hàng trực tuyến</a>
                            </li>
                            <li>
                                <a>Chính sách &amp; điều khoản giao hàng</a>
                            </li>
                            <li>
                                <a>Theo dõi</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Trợ giúp</h5>
                        <ul>
                            <li>
                                <a>Hỏi đáp</a>
                            </li>
                            <li>
                                <a>Liên hệ</a>
                            </li>
                            <li>
                                <a>Chính sách trả hàng</a>
                            </li>
                            <li>
                                <a>Đăng ký sản phẩm</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                    © 2022 Copyright:
                    <a href="http://www.MDBootstrap.com"> </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
