import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "../components/Loader";
// import ProductList from "../components/products/ProductList";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import Chart from "../pages/Chart";
// import ProductDetails from "../pages/ProductDetails";
// import PageNotFound from "../pages/PageNotFound";
// import Language from "../pages/Language";

const ProductList = React.lazy(() =>
  import("../components/products/ProductList")
);
const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const Chart = React.lazy(() => import("../pages/Chart"));
const ProductDetails = React.lazy(() => import("../pages/ProductDetails"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));
const Language = React.lazy(() => import("../pages/Language"));

export default function Router() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/language" element={<Language />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
