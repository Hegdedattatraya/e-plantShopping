import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import CartItem from './CartItem'; // Import the CartItem component

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false); // Add state to control Cart visibility

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false); // Ensure Cart is hidden when navigating to Product List
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false); // Reset both states
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false); // Navigate to the Cart view
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false); // Return to Product List from Cart
  };

  return (
    <Provider store={store}> {/* Wrap the app in Redux Provider */}
      <div className="app-container">
        {/* Landing Page Section */}
        <div className={`landing-page ${showProductList || showCart ? 'fade-out' : ''}`}>
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
          <ProductList onHomeClick={handleHomeClick} onCartClick={handleCartClick} />
        </div>

        {/* Cart Section */}
        <div className={`cart-container ${showCart ? 'visible' : ''}`}>
          <CartItem onContinueShopping={handleContinueShopping} />
        </div>
      </div>
    </Provider>
  );
}

export default App;