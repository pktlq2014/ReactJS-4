import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import ProductListContainer from './containers/ProductListContainer';
import CartListContainer from './containers/CartListContainer';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <main id="mainContainer">
        <div class="container">
          <ProductListContainer/>
          <Message/>
          <CartListContainer/>
          </div>
      </main>
      <Footer/>
      </div>
  );
}

export default App;
