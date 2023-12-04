import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import RouteGuard from "../components/RouteGuard";
import AdminDashboard from "../pages/AdminDashboard";

const Path = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
            // <RouteGuard>
            // </RouteGuard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Path;
