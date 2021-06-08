
import React from 'react';
import RecentReceiving from '../plugins/RecentReceiving';
import RecentConsumption from '../plugins/RecentConsumption';
import Expired from '../plugins/Expired';
import NearExpiry from '../plugins/NearExpiry';
import OutOfStock from '../plugins/OutOfStock';
import { connect } from 'react-redux';


class Dashboard extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap">   
        <RecentReceiving />
        <RecentConsumption />
        <Expired />
        <NearExpiry />
        <OutOfStock />
      </div>
    
    );
  }
}


export default connect()(Dashboard);