import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import HomePage from "./components/Home";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard"; // Import Dashboard

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'admin' or 'user'

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin") {
      setUserType("admin");
      setLoggedIn(true);
    } else if (email === "user@gmail.com" && password === "user") {
      setUserType("user");
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {!loggedIn && (
          <>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}

        {/* Admin Routes */}
        {loggedIn && userType === "admin" && (
          <>
            <Route path="/" element={<Navigate to="/admin" replace />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </>
        )}

        {/* User Routes */}
        {loggedIn && userType === "user" && (
          <>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />

          </>
        )}

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
