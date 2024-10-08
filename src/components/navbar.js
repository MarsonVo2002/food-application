import { useState } from "react";
import Sidebar from "./sidebar";
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const links = [
    {
        name:"Home",
        path:"/",
        icon:faHome
    },
    {
        name:"Recipes",
        path:"/recipes",
        icon: faList
    },
    {
        name:"Settings",
        path:"/settings",
        icon: faCog
    }
  ]
  function closeSidebar()
  {
    setShowSideBar(false);
  }
  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          F<span>oo</span>diesHub
        </a>
        <div className="nav-links">
            {links.map(link => (<Link className={location.pathname === link.path ? "active" : "link"} to={link.path} key={link.name}>{link.name}</Link>))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipes</a>
          <a href="#!">Settings</a> */}
        </div>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar close = {closeSidebar} links = {links}></Sidebar>}
    </>
  );
}
