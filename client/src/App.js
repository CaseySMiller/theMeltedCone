import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Subscribe from "./pages/Subscribe";
import Profile from "./pages/Profile";

// import Cart from "./pages/Cart";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Navbar />
          {/* <Home /> */}
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/order" element={<Order />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/subscribe" element={<Subscribe />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}
