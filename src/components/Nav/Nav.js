import React, { useState } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';

const Routes = () => {
    const [pages] = useState([
        { name: "Home", route: "/" },
        { name: "Gallery", route: "/gallery" },
        { name: "About", route: "/about" },
        { name: "Donate", route: "/donate" },
        { name: "Contact Us", route: "/contact" },
      ]);

    const location = useLocation();

    return (
        pages.map((page, index) => {
            return (
                page.route == location.pathname ? 
                    <Link key={index} to={page.route} style={{ color: "#000", backgroundColor: "#fff" }} disabled >{page.name}</Link>
                :
                    <Link key={index} to={page.route} >{page.name}</Link>
            )
        })
    )
}

export default Routes;