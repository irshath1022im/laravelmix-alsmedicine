import React from 'react'
import Loading from '../shared/Loading'

import '../../pages/category/category.css';

class Category extends React.Component {
   
    constructor(props){
        super(props)

        this.state = {
            category: ['Taplets', 'Tubes', 'Paste']
        }
    }

    render() {
        const {category} = this.state
        return (
            <>

            {
                category.length > 0 ?
                <ul className="list-group">
                    {
                        category.map( (item,key) =>{
                            return(
                                <li key={key} className="list-group-item item-list" >{item}</li>
                            )
                        })
                    }
                        
                    </ul>
            :
            <Loading message="Loading Category"/>
            }
            </>
        )
    }
}

export default Category;