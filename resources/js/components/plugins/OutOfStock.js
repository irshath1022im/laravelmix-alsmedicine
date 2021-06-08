import React from 'react';
import { Link } from 'react-router-dom';

export default class OutOfStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
            <div  className="mb-2">
                <h3 className="bg-info p-2 text-uppercase">OutOfStock... </h3>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>CODE</th>
                                <th>DATE</th>
                                <th>NAME</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ALS-001</td>
                                <td>2021-05-15</td>
                                <td>ITEM1</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                <div className="" >
                    <Link to="/outofstock">
                        <button type="button" className="btn btn-primary ">Get More</button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
