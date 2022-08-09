import React from 'react';
import Header from './components/Header';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

function App(props) {
    return (
        <React.Fragment>
            <Header />
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer />
                    <MessageContainer />
                    <CartContainer />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default App;
