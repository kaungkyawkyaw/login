import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RouteGuard from "../components/RouteGuard";
import AdminDashboard from "../pages/AdminDashboard";
import AddToCart from "../components/AddToCart";
import Details from "../components/Details";

const Path = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <Home />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/addtocart"
          element={
            <RouteGuard>
              <AddToCart />
            </RouteGuard>
          }
        />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default Path;
