import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import ProductListContainer from './containers/ProductListContainer';
import CartList from './components/CartList';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <main id="mainContainer">
        <div class="container">
          <ProductListContainer/>
          <Message/>
          <CartList/>
          </div>
      </main>
      <Footer/>
      </div>
  );
}

export default App;
