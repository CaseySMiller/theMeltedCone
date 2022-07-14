import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import About from "./pages/Aboutus";
// import Order from "./pages/Order";
// import Contact from "./pages/Contact";
// import Subscribe from "./pages/Subscribe";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <div>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subscribe" element={<Subscribe />} /> */}
          </Routes>
          {/* <Home /> */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}
