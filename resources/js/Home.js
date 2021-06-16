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
import AdminHome from './pages/dashboard/AdminHome';
import AdminItem from './pages/dashboard/AdminItem';
import Login from './pages/auth/Login';
import AddItem from './components/item/AddItem';


function Home() {
  return (

    <div>
       <Router>
        <NavBar />
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
          <Route path="/admin" exact component={AdminHome} />
          <Route path="/adminItem" component={AdminItem} />
          <Route path="/admin/item/new" component={AddItem} />
          <Route path="/login" component={Login} />
        </Switch>
       </Router>

    </div>
  );
}

export default Home;
