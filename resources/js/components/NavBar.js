import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div  className="d-flex ir-navbar-main">
            <h3>ALS MEDICINE</h3>
            <nav className="p-2 ir-navbar-main-navbar"> 
                <Link className="p-1" to="/">HOME</Link>
                <Link className="p-1" to="/items">ITEMS</Link>
                <Link className="p-1" to="/receiving">RECEIVING</Link>
                <Link className="p-1" to="/consumption">CONSUMPTION</Link>
                <Link className="p-1" to="/nearExpiry">NEAR EXPIRY</Link>
                <Link className="p-1" to="/admin">DASHBOARD</Link>
            </nav>
        </div>
    )
}




export default NavBar;