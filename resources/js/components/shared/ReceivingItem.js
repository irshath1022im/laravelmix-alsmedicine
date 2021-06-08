import React from 'react'

const ReceivingItem = ({item}) => {
    return(
        <tr>
        <td>{item.item_id.erp_code}</td>
        <td>{item.date} date</td>
        <td>{item.item_id.name}</td>
        <td>{item.qty}</td>
        <td>{item.unit_price}</td>
        <td>{item.totalCost}</td>
        <td>{item.expiry_date}</td>
        <td>supplier</td>
    </tr>
    )
}

export default ReceivingItem;