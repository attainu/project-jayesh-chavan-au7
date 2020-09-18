import React from 'react'
import './navbar.scss'

const Navbar = function () {
    return(
        <nav class="navbar navbar-light">
            <a class="navbar-brand" href="/">
                <i class="fas fa-hands-helping"></i>
                <span>Blood_Line</span>
            </a>
            <div className="navbar__btn">
                <button class="btn bg-primary">Login</button>
                <button class="btn bg-primary">Donate</button>
            </div>
        </nav>
    )
}

export default Navbar