import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import { FaBell } from 'react-icons/fa';

import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";
import Dashboard from "./Dashboard";
import "./Navbar.css"

const logoStyle = {
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: '30px',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 0 35px',
    padding: '0',
};

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <IconContext.Provider value={{ color: "#FFF" }}>
                {/* All the icons now are white */}
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className="menu-right-bars">
                        <div className="icon-container">
                            <FaBell style={{ margin: "20px" }} />
                            <CgIcons.CgProfile style={{ marginLeft: "20px" }} />
                            <h5 style={{ color: "#fff", margin: "0 20px 0 10px" }}>Testing</h5>
                        </div>
                    </div>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <div>
                                <h1 style={logoStyle}>Wa-One</h1>
                            </div>
                        </li>
                        <hr />

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>

            <Dashboard />
        </>
    );
}
