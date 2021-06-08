import React from 'react';

class Consumption extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                    <h3 className="bg-info p-2 text-uppercase">Consumptions...</h3>

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

                <div>
                    <button type="button" className="btn btn-primary">Load More...</button>
                </div>

            </div>
         );
    }
}
 
export default Consumption;