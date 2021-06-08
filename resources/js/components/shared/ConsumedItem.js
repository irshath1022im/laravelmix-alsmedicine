import React from 'react'

const ConsumedItem = ({item}) => {
    return(
            <tr>
                <td>{item.item.erp_code}</td>
                <td>{item.created_at}</td>
                <td>{item.item.name}</td>
                <td>{item.qty}</td>
                <td>{item.location}</td>
            </tr>

    )
}

export default ConsumedItem;