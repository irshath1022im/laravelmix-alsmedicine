import React, { Component } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout';

import HomeItem from '../item/HomeItem';

class AdminHome extends Component {
    render() {
        return (
           <AdminLayout>
                <HomeItem />
           </AdminLayout>
        )
    }
}


export default AdminHome;
