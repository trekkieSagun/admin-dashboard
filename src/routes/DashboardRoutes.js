import React, { Component } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

class DashboardRoutes extends Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
          height: "100vh",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Switch>
          <Route path="/" element={<Dashboard />} />
        </Switch>
      </div>
    );
  }
}

export default DashboardRoutes;
