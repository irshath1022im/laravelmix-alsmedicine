import React from 'react'
import { FaEdit, FaTimes } from 'react-icons/fa'
// import { connect } from 'react-redux'
// import { removeReceivingItemAction } from '../../../redux/actions/addReceivingActions'


const ReceivingItemList = ({items, dispatch}) => {

// const removeItemBtn =(key) =>{
//   dispatch(removeReceivingItemAction(key))
//   <FaTimes onClick={()=>removeItemBtn(key)}></FaTimes>
  
// }

    return (
            <div className="card">
              <div className="card-header">
                Receiving Items
              </div>
              <div className="card-body">
                    <div className="table-responsive">
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
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        items.length > 0 ?
                        items.map((item,key) => {
                            return(
                                <tr key={key}>
                                    <th scope="row">{item.item.erp_code}</th>
                                    <td>{item.name}</td>
                                    <td>{item.receiving_id}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.cost}</td>
                                    <td>{item.qty * item.cost}</td>
                                    <td>{item.remark}</td>
                                    <td className="d-flex m-0 justify-content-between">
                                      <FaEdit></FaEdit>
                                      
                                    
                                    </td>
                                </tr>
                            )
                        })

                        : 
                        <tr>
                            <td>No item received </td>
                        </tr>
                      }
                        
                      </tbody>
                    </table>
                    </div>
                    

              </div>
            </div>
    )
}

// const mapStateToProps =({addReceiving})=>{
//   return{
//     items : addReceiving.items
//   }
// }

export default ReceivingItemList