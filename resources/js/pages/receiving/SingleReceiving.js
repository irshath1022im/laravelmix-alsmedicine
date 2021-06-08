import axios from 'axios'
import React from 'react'
import { Card } from 'react-bootstrap'
import NewReceivingItemModal from '../../components/receivingItem/NewReceivingItemModal'



class SingleReceiving extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data:{},
            modalShow: false,

        }
    }


componentDidMount() {
    const {id} = this.props.match.params

    this.getReceiving(id);

}

getReceiving = async(id)=>{
    try {
        const result = await axios.get(`http://localhost:8000/api/v1/receiving/${id}`)
        // console.log(result);
        this.setState({
            data: result.data
        })
    } catch (error) {
        console.log(error)
    }
}

    render(){
        const {match} = this.props
        const {data, modalShow} = this.state;

        if(Object.keys(data).length > 0){    
                    const {id,receiving_date,po,supplier,receiving_items_total,receiving_items} = data
                    return(
                        <div>
                            <Card>
                                <Card.Header>RECEIVING-ID : {match.params.id}</Card.Header>
                                <Card.Body>                              
                                  
                                    <div>
                                        <div className="" >
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
                                                                <tr>
                                                                    <td>{id}</td>
                                                                    <td>{receiving_date}</td>
                                                                    <td>{po}</td>
                                                                    <td>{supplier}</td>
                                                                    <td>{receiving_items_total}</td>
                                                                </tr>  
                                                }
                                                    </tbody>
                                                </table>
                                        </div>
                                        
                                        <div>
                                            <button className="btn btn-primary btn-sm" type="button" onClick={ ()=>this.setState({modalShow: true})}>Add Items</button>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ERP_CODE</th>
                                                        <th scope="col">ITEM NAME</th>
                                                        <th scope="col">RECEIVING ID</th>
                                                        <th scope="col">QTY</th>
                                                        <th scope="col">COST</th>
                                                        <th scope="col">TOTAL</th>
                                                        <th scope="col">REMARK</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        receiving_items.map( (item,key) => {
                                                            return(
                                                                        <tr key={key}>
                                                                            <th scope="row">{item.item.erp_code}</th>
                                                                            <td>{item.item.name}</td>
                                                                            <td>{item.receiving_id}</td>
                                                                            <td>{item.qty}</td>
                                                                            <td>{item.unit_price}</td>
                                                                            <td>{item.cost}</td>
                                                                            <td>{item.remark}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                    }
                                                </tbody>
                                            </table>

                                        </div>


                                    </div>
                                  
                        
                        </Card.Body>
                     </Card>
                                           
                     <div>
                            <NewReceivingItemModal 
                                show={modalShow}
                                handleClose= { ()=>this.setState({modalShow:!modalShow}, () => { this.getReceiving(match.params.id)})}
                                receiving_id={match.params.id}
                                />
                      
                    </div>

                </div>
            )
        }                     
        else {
            return(
                <div>
                    Loading.....single page
                </div>
            )
        }
    }
}

export default SingleReceiving