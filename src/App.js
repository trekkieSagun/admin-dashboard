import React, { Component } from "react";
import Home from "./components/Home/Home";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import Routes from "./routes/Routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Routes /> */}
        {/* <Dashboard /> */}
        {/* <AdminDashboard /> */}
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
