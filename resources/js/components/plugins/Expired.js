import React from 'react';
import { Link } from 'react-router-dom';

export default class Expired extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
            <div  className="mb-2">
                <h3 className="bg-info p-2 text-uppercase">Expired....</h3>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>CODE</th>
                                <th>DATE</th>
                                <th>NAME</th>
                                <th>QTY</th>
                                <th>DAYS</th>
                                <th>SUPPLIER</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ALS-001</td>
                                <td>2021-05-15</td>
                                <td>ITEM1</td>
                                <td>5</td>
                                <td>-10 Days</td>
                                <td>AL DOUSARY</td>
                            </tr>
                            <tr>
                            <td>ALS-001</td>
                            <td>2021-05-15</td>
                            <td>ITEM1</td>
                            <td>5</td>
                            <td>-10 Days</td>
                            <td>AL DOUSARY</td>
                        </tr>
                        <tr>
                        <td>ALS-001</td>
                        <td>2021-05-15</td>
                        <td>ITEM1</td>
                        <td>5</td>
                        <td>-10 Days</td>
                        <td>AL DOUSARY</td>
                    </tr>
                    <tr>
                    <td>ALS-001</td>
                    <td>2021-05-15</td>
                    <td>ITEM1</td>
                    <td>5</td>
                    <td>-10 Days</td>
                    <td>AL DOUSARY</td>
                </tr>
                            
                        </tbody>
                    </table>
                </div>

                <div className="" >
                    <Link to="/expired">
                        <button type="button" className="btn btn-primary ">Get More</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
