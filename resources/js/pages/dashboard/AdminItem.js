import React, { Component } from 'react'
import { connect } from 'react-redux';
import AdminLayout from '../../components/layouts/AdminLayout';

import HomeItem from '../item/HomeItem';
import Login from '../auth/Login';
import {Link} from 'react-router-dom';

class AdminItem extends Component {
    constructor(props){
        super(props)

        this.state={
            addItemModalStatus: false,
        }
    }



    render() {
        const {logedIn, userName} = this.props.userStore;

            if(logedIn) {
                return (
                    <AdminLayout>
                        <Link to="/admin/item/new">
                         <button className="btn btn-primary" type="button" >New Item</button>
                        </Link>

                         <HomeItem />



                    </AdminLayout>

                )
            } else {
                return(
                    <Login />
                )
            }

    }
}

const mapStateToProps = ({user}) =>{
    return {
        userStore:user
    }
}

export default connect(mapStateToProps)(AdminItem);
