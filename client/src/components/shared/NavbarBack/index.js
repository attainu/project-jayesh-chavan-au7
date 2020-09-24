import React from 'react'
import './navbar_v.scss'

const NavbarBack = function (props) {

    const { clickHandler, buttonText } = props

    return(
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="/">
                <i className="fas fa-hands-helping"></i>
                <span>Blood_Line</span>
            </a>
            <div className="navbar__btn">
                <button className="btn bg-primary" onClick={clickHandler}>{buttonText}</button>
            </div>
        </nav>
    )
}

export default NavbarBack