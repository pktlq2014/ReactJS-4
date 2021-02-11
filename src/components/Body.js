import MessageContainer from './../containers/MessageContainer';
import ProductListContainer from './../containers/ProductListContainer';
import CartListContainer from './../containers/CartListContainer';
import Footer from './Footer';
function App() {
    return (
        <div>
            <main id="mainContainer">
                <div className="container">
                    <ProductListContainer />
                    <MessageContainer />
                    <CartListContainer />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
