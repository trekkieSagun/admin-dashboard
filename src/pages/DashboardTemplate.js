import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faBusAlt,
  faClipboardList,
  faGem,
  faGlobeAsia,
  faNetworkWired,
  faPaperPlane,
  faRoute,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../components/Sidebar";
import DashboardRoutes from "../routes/DashboardRoutes";

class DashboardTemplate extends Component {
  state = {
    menus: [
      {
        icon: <FontAwesomeIcon icon={faGem} />,
        menuName: "Dashboard",
        path: "/dashboard",
        display: true,
      },
      {
        icon: <FontAwesomeIcon icon={faSignOutAlt} />,
        menuName: "Sign Out",
        path: "/",
        display: true,
      },
      //   {
      //     icon: <FontAwesomeIcon icon={faRoute} />,
      //     menuName: "Route Configuration",
      //     path: "",
      //     display: checkRolePermissions("view", moduleName.route),
      //     subMenus: [
      //       {
      //         icon: null,
      //         menuName: "Routes",
      //         path: "/admin/dashboard/routes",
      //         display: checkRolePermissions("view", moduleName.route),
      //       },
      //     ],
      //   },
    ],
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar menus={this.state.menus} />
        <DashboardRoutes></DashboardRoutes>
      </div>
    );
  }
}

export default DashboardTemplate;
