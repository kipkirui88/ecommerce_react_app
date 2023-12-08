import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import ProductCard from "./Components/ProductCard";
import LoginPage from "./Components/LoginPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <ProductCard />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
