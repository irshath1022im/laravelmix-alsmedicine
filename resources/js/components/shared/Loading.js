
import React from 'react'

export default function Loading( {message}) {
    return (
             <div className="alert alert-info d-block" >
                 <strong>{message}</strong>
                </div>
    )
}
