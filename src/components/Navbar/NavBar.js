import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faBell,
  faBellSlash,
  faGripHorizontal,
  faLanguage,
  faMailBulk,
  faMobile,
  faSearch,
  faStamp,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="items">
          {/* <div className="item">
            <FontAwesomeIcon icon={faMobile} className="icon" />
          </div> */}
          <div className="item">
            <FontAwesomeIcon icon={faBell} className="icon" />

            <div className="counter">1</div>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faMailBulk} className="icon" />

            <div className="counter">2</div>
          </div>
          {/* <div className="item">
            <FontAwesomeIcon icon={faBars} className="icon" />
          </div> */}
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
