import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutAction } from '../redux/actions/authentication'
import {Alert} from 'react-bootstrap'

const NavBar = (props) => {

const signOutRequest = ()=>{
    props.dispatch(logOutAction())
}

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
                <Link className="p-2 text-white" to="/admin">DASHBOARD</Link>
                }
                {
                    props.userStore.logedIn === true ?
                    <button className="btn btn-info btn-sm" type="button" onClick={signOutRequest}>Sign Out</button>
                    :
                    <Link to="/login">
                    <button className="btn btn-success btn-sm" type="button">Sign In</button>
                    </Link>


                }

            </nav>


            <Alert variant="primary" className="alerts-group">
                Alert.Heading, p, Alert.Link, hr, etc
            </Alert>



        </div>
    )
}


const mapStateToProps = ({user})=>{
    return {
        userStore : user
    }
}

export default connect(mapStateToProps)(NavBar) ;
