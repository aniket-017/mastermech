import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header/Header";

import Page1 from "./Components/Page1.js";
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
       
        <Route path="/products" element={<Page1 />} />
        <Route path="/products/:keyword" element={<Page1 />} />
    
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/" element={<Page1 />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
