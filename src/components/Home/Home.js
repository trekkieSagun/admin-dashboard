import React, { Component } from "react";
import NavBar from "../Navbar/NavBar";
import SidebarComponent from "../Sidebar/SidebarComponent";
import "./home.scss";
import Widget from "../Widget/Widget";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <SidebarComponent />
        <div className="homeContainer">
          <NavBar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
