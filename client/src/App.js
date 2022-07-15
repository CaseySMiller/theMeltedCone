import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/Aboutus";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Subscribe from "./pages/Subscribe";
import Cart from "./pages/Cart";


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Home />
        <div>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
