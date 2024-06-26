import { Route, Routes } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Chart from "../pages/Chart";
import ProductDetails from "../pages/ProductDetails";
import PageNotFound from "../pages/PageNotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
