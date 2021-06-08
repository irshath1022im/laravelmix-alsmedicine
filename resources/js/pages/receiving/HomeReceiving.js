import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {initialReceivingAction, loadMoreAction } from '../../redux/actions/receivingAction';


class HomeReceiving extends React.Component {


componentDidMount(){

    const {dispatch} = this.props;
    dispatch(initialReceivingAction())

}

loadMore = async (url) =>{
    const {dispatch} = this.props;
    await dispatch(loadMoreAction(url))
}


    render() { 
        const {data,loading,links} = this.props.receivings;
        return ( 
            <div>
                    <Link to="/receiving/add">
                        <button className="btn btn-info" type="button">NEW RECEIVING</button>
                    </Link>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>RECEIVING DATE</th>
                                    <th>PO</th>
                                    <th>SUPPLIER</th>
                                    <th>RECEIVED ITEMS</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    !loading ?
                                    data.length > 0 &&
                                    data.map( (item,key) => {
                                        return (
                                          
                                                <tr key={key}>
                                                    <td>{item.id}</td>
                                                    <td>{item.receiving_date}</td>
                                                    <td>{item.po}</td>
                                                    <td>{item.supplier}</td>
                                                    <td> <Link to={`/receiving/${item.id}`}>
                                                        {item.received_items_total}
                                                        </Link>
                                                    </td>
                                                    
                                                   
                                                </tr> 
                                          
                                        )
                                    })
                                
                                :
                                <tr>
                                    <td>Loading...</td>
                                </tr>                              
                                }
                            </tbody>
                        </table>
                </div>

                <div className="d-flex">
                    <button type="button" className="btn btn-primary" 
                        onClick={ () => this.loadMore(links.first)} 
                        disabled={ links.first != null ? false : true}
                    >
                       First
                    </button>

                    <button type="button" className="btn btn-primary" 
                    onClick={ () => this.loadMore(links.next)} 
                    disabled={ links.next != null ? false : true}
                     >
                     Next...
                    </button>

                    <button type="button" className="btn btn-primary" 
                      onClick={ () => this.loadMore(links.last)} 
                     disabled={ links.last != null ? false : true}
                     >
                     Last...
                    </button>
                </div>

            </div>
         );
    }
}
 
const mapStateToProps = ({receivings}) =>{
    return {
        receivings
    }
}
export default connect(mapStateToProps)(HomeReceiving);