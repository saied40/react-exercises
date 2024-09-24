import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./000-home/home.page";
import CounterApp from "./001-counter-app/counter.page";
import ProductsApp from "./002-products-app/products.page";
import ProductDetails from "./002-products-app/productDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/products" element={<ProductsApp />} />
        <Route path="/products/:productSlog" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
