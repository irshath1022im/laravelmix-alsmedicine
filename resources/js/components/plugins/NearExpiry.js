import React from 'react'
import { Link } from 'react-router-dom';

class NearExpiry extends React.Component {
    state = {  }
    render() { 
        return (
            <div  className="mb-2">
                <h3 className="bg-info p-2 text-uppercase">Near Expiry...</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>CODE</th>
                            <th>NAME</th>
                            <th>RECEIVED</th>
                            <th>EXPIRAY DATE</th>
                            <th>REMAIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ALS-001</td>
                            <td>ITEM-1</td>
                            <td>2020-05-10</td>
                            <td>2021-05-10</td>
                            <td>10 Days</td>
                        </tr>                     
                    </tbody>
                </table>

               
                <div className="" >
                    <Link to="/nearExpiry">
                        <button type="button" className="btn btn-primary ">Get More</button>
                    </Link>
                </div>

            </div>
          );
    }
}
 
export default NearExpiry;