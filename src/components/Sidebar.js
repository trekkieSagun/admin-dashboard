import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import "../assets/scss/app.scss";

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    // <ProSidebar collapsed={collapsed} image={collapsed ? null : sidebarBg}>
    <ProSidebar collapsed={collapsed}>
      <SidebarHeader onClick={handleCollapse}>
        <div className="sidebarHeader">Techart HRM</div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          {props.menus.length > 0
            ? props.menus
                .filter((el) => el.display)
                .map((menu, idx) => {
                  if (menu.subMenus && menu.subMenus.length > 0) {
                    return (
                      <SubMenu key={idx} title={menu.menuName} icon={menu.icon}>
                        {menu.subMenus
                          .filter((el) => el.display)
                          .map((subMenu, sIdx) => {
                            return (
                              <MenuItem key={sIdx} icon={subMenu.icon}>
                                {subMenu.menuName}
                                {subMenu.path ? (
                                  <Link to={subMenu.path} />
                                ) : null}
                              </MenuItem>
                            );
                          })}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <MenuItem
                        key={idx}
                        icon={menu.icon}
                        onClick={
                          menu.menuName === "Sign Out"
                            ? () => localStorage.clear()
                            : null
                        }
                      >
                        {menu.menuName}
                        {menu.path ? <Link to={menu.path} /> : null}
                      </MenuItem>
                    );
                  }
                })
            : null}
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: "center" }}></SidebarFooter>
    </ProSidebar>
  );
}

export default Sidebar;
