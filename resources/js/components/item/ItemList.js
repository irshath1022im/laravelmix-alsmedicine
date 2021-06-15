import React, { useState } from 'react'
import { FaImages } from 'react-icons/fa';
import ImageModal from './ImageModal';

export default function ItemList(props) {
    const {erp_code,name,category,thumbnail,initial_qty} = props.items;

    const [show, setShow] = useState(false)


    return (
        <>
                <tr className="item">
                    <td scope="row">{erp_code}</td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td className="item-thumbnail">
                     {
                        // console.log(typeof(thumbnail))

                     }
                     <FaImages onClick={ ()=> setShow(true)} />
                    </td>
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

                <ImageModal
                    show={show}
                    handleClose = { ()=>setShow(false)}
                    thumbnail={thumbnail}
                />

        </>
    )
}
