import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div  className="d-flex justify-content-between bg-secondary align-items-center mb-2 ">
            <div className="navbar-brand">
                <img src="/images/alshahania-logo.png"  />
                
            </div>
            <nav className="p-2 ir-navbar-main-navbar navbar-top">
                <Link className="p-2 text-white" to="/">HOME</Link>
                <Link className="p-2 text-white" to="/items">ITEMS</Link>
                {
                // <Link className="p-1" to="/consumption">CONSUMPTION</Link>
                // <Link className="p-1" to="/nearExpiry">NEAR EXPIRY</Link>
                // <Link className="p-1" to="/admin">DASHBOARD</Link>
                }
            </nav>
        </div>
    )
}




export default NavBar;
