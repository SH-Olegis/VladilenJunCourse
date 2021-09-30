import React from "react";

const NavBar = ({totalCount}) => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a href="/" className="nav-link disabled position-relative">Корзина
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {totalCount}
    <span className="visually-hidden">unread messages</span>
  </span>
                </a>
            </li>
        </ul>
    )
}

export default NavBar