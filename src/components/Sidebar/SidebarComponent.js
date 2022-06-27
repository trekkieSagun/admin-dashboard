import React from "react";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashcube, faStackpath } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faChartBar,
  faExchangeAlt,
  faFile,
  faFileAlt,
  faLongArrowAltDown,
  faPaperclip,
  faSearch,
  faSignOutAlt,
  faToolbox,
  faTools,
  faTruck,
  faUser,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    // <div className="sidebar">
    //   <div className="top">
    //     <span className="logo">Admin Dashboard</span>
    //   </div>
    //   <hr />
    //   <div className="center">
    //     <ul>
    //       <p className="title">MAIN</p>
    //       <li>
    //         <FontAwesomeIcon icon={faDashcube} className="icon" />
    //         <span>Dashboard</span>
    //       </li>
    //       <p className="title">LISTS</p>
    //       <li>
    //         <FontAwesomeIcon icon={faBell} className="icon" />

    //         <span>Notifications</span>
    //       </li>
    //       <li>
    //         <FontAwesomeIcon icon={faUser} className="icon" />

    //         <span>Users</span>
    //       </li>
    //       <li>
    //         <FontAwesomeIcon icon={faStackpath} className="icon" />

    //         <span>Stats</span>
    //       </li>
    //       <p className="title">EXTRAS</p>
    //       <li>
    //         <FontAwesomeIcon icon={faLongArrowAltDown} className="icon" />

    //         <span>Logs</span>
    //       </li>
    //       <li>
    //         <FontAwesomeIcon icon={faSearch} className="icon" />

    //         <span>Settings</span>
    //       </li>
    //       <p className="title">USER</p>
    //       <li>
    //         <FontAwesomeIcon icon={faUserAstronaut} className="icon" />

    //         <span>Profile</span>
    //       </li>
    //       <li>
    //         <FontAwesomeIcon icon={faSignOutAlt} className="icon" />

    //         <span>Logout</span>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="logo"></div>
    // </div>

    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <FontAwesomeIcon icon={faBars} className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <li>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>Users</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <FontAwesomeIcon icon={faChartBar} className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <FontAwesomeIcon icon={faFileAlt} className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTools} className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <FontAwesomeIcon icon={faUserAstronaut} className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;
