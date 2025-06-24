// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Prouducts";
import ProductDetail from "./componets/Prouductdetails";
import Cart from "./pages/Cart";
import Navbar from "./componets/Navbar";
import LogIn from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashborad";
import ProtectedRoute from "./routes/ProtectedRoute";

// Wrapper component to use useLocation inside Router
function AppContent() {
  const location = useLocation();

  // List of routes where you want to hide the navbar
  const hideNavbarRoutes = ["/login", "/signup"];

  // Check if current pathname matches
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

// Main App with Router wrapping AppContent
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
