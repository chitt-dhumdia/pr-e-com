import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import AddCategory from "./pages/admin/category/AddCategory.jsx";
import AllCategory from "./pages/admin/category/AllCategory.jsx";
import AddProduct from "./pages/admin/product/AddProduct.jsx";
import AllProduct from "./pages/admin/product/AllProduct.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/admin/product/ProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";

function App() {

  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>

      {!isAdminPage && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
            path="/admin/category/add"
            element={<AddCategory/>}
        />

         <Route
          path="/admin/category/all"
          element={<AllCategory />}
      />

      <Route
      path="/admin/product/add"
      element={<AddProduct />}
/>

    <Route
    path="/admin/product/all"
    element={<AllProduct />}
/>

    <Route
    path="/product/:id"
    element={<ProductDetails />}
/>

<Route
    path="/cart"
    element={<Cart />}
/>

      </Routes>

      

     

      <ToastContainer />

    </>
  );
}

export default App;