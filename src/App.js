import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Listing from "./pages/listing/Listing";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/about" element={<About />} />
          <Route exact={true} path="/listing" element={<Listing />} />
          <Route exact={true} path="/details" element={<Details />} />
          <Route exact={true} path="/cart" element={<Cart />} />
          <Route exact={true} path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
