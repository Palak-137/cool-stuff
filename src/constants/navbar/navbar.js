import React from 'react'
import "./navbar.css"

const navbar = () => {
    return(
            <nav className="navbar fixed-top navbar-expand-sm justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Heading</a>
                    </li>
                </ul>
            </nav>
    )
}

export default navbar
