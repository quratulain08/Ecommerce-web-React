import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home'; 
import { Navbar } from './components/navbar/navbar'; 
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./contxt/shop-context";


function App() {
  return (
    <div className="App">
       <ShopContextProvider>
        <Router>
          <Navbar />
          <Home />
        
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
  

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    
  );
}

export default App;
