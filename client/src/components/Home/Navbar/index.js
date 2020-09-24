import React from 'react'
import { useHistory } from 'react-router-dom'
import './navbar.scss'

const Navbar = function () {

    const history = useHistory()

    return(
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="/">
                <i className="fas fa-hands-helping"></i>
                <span>Blood_Line</span>
            </a>
            <div className="navbar__btn">
                <button className="btn bg-primary" onClick={() => history.push('/login')}>Login</button>
                <button className="btn bg-primary">Donate</button>
            </div>
        </nav>
    )
}

export default Navbar