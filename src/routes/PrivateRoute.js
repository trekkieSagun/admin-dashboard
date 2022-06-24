import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/" replace />;
}

function useAuth() {
  let token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

export default PrivateRoute;
