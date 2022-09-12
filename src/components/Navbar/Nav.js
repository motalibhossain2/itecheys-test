import React from 'react'
import { Form } from 'react-bootstrap'

import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <ul className="Navbar">
                <li className="NavItem">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="NavItem">
                    <NavLink className="nav-link" to="/about">About</NavLink>

                </li>
                <li className="NavItem">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default NavBar