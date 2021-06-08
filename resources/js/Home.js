import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeReceiving from './pages/receiving/HomeReceiving';
import Consumption from './components/pages/Consumption';
import NearExpiry from './components/pages/NearExpiry';
import OutOfStock from './components/pages/OutOfStock';
import SingleReceiving from './pages/receiving/SingleReceiving';
import HomeItem from './pages/item/HomeItem';
import NewReceivingItem from './components/receivingItem/NewReceivingItem';
import AddReceiving from './pages/receiving/AddReceiving';


function Home() {
  return (
    <div className="container">


       <Router>
        <NavBar />
        <hr />
        <Switch>
          <Route path="/" component={HomeItem} exact />
          <Route path="/items" exact component={HomeItem} />
          <Route path="/receiving" exact component={HomeReceiving} />
          <Route path="/receiving/add" exact component={AddReceiving} />
          <Route path="/receivingItem/new" exact component={NewReceivingItem} />
          <Route path="/receiving/:id" exact component={SingleReceiving} />
          <Route path="/consumption" exact component={Consumption} />
          <Route path="/nearExpiry" exact component={NearExpiry} />
          <Route path="/outofstock" exact component={OutOfStock} />
        </Switch>
       </Router>

    </div>
  );
}

export default Home;
