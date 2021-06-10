import React from 'react'

export default function ItemList(props) {
    const {erp_code,name,category,thumbnail,initial_qty} = props.items;
    return (
        <>
                <tr>
                    <td scope="row">{erp_code}</td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td><img className="w-25" src={thumbnail} /></td>
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
