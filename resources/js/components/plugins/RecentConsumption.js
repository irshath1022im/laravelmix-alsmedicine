import React from 'react';
import { Link } from 'react-router-dom';

class RecentConsumption extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
            <div  className="mb-2">
                <h3 className="bg-info p-2 text-uppercase">Recent Consumption....</h3>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>CODE</th>
                                <th>DATE</th>
                                <th>NAME</th>
                                <th>QTY</th>
                                <th>LOCATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ALS-001</td>
                                <td>2021-05-15</td>
                                <td>ITEM1</td>
                                <td>5</td>
                                <td>BREEDING BARN</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                <Link to="/consumption">
                    <button type="button" className="btn btn-primary ">Get More</button>
                </Link>

            </div>
         );
    }
}
 
export default RecentConsumption;