import React from "react"
import { Link } from "react-router-dom"

const links = [
    { link: "/", title: "Main" },
    { link: "/login", title: "Login" },
    { link: "/users", title: "Users" }
]

const NavBar = () => {
    return (
        <ul className="nav">
            {links.map((link) => (
                <li className="nav-item" key={link.title}>
                    <Link className="nav-link" to={link.link}>
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavBar
