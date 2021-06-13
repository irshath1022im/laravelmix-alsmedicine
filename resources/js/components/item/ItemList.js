import React from 'react'

export default function ItemList(props) {
    const {erp_code,name,category,thumbnail,initial_qty} = props.items;
    return (
        <>
                <tr className="item">
                    <td scope="row">{erp_code}</td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td
                    className="item-thumbnail"><img className="" src={`/storage/${thumbnail}`} /></td>
                    <td>{initial_qty}</td>


                {
                    // <td>
                    //     <a href="">
                    //         <button className="btn btn-secondary">
                    //             Edit
                    //         </button>
                    //     </a>
                    // </td>
                }
                </tr>
        </>
    )
}
