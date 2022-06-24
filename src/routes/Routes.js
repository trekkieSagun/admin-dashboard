import React, { Component } from "react";
import { Route, Routes as Switch, Navigate } from "react-router-dom";
import DashboardTemplate from "../pages/DashboardTemplate";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/NotFound";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            element={
              <LoginPath>
                <LoginPage />
              </LoginPath>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <PrivateRoute>
                <DashboardTemplate />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </div>
    );
  }
}

function LoginPath({ children }) {
  let token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return children;
  }
}

export default Routes;
