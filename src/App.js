import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Product from "./Component/Product";
import OnlyProduct from "./Component/OnlyProduct";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";
import Contact from "./Component/Contact";
import About from "./Component/About";
import LoginForm from "./Component/LoginForm";
import SignUpForm from "./Component/SignUpForm";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<OnlyProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;
