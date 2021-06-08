import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
            <nav className="d-flex flex-column p-2"> 
                <Link className="p-1" to="/">HOME</Link>
                <Link className="p-1" to="/items">ITEMS</Link>
                <Link className="p-1" to="/receiving">RECEIVING</Link>
                <Link className="p-1" to="/consumption">CONSUMPTION</Link>
                <Link className="p-1" to="/nearExpiry">NEAR EXPIRY</Link>
            </nav>
    )
}




export default NavBar;