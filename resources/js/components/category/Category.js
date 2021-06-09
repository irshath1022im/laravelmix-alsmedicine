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
                                <div key={key} className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={item} onChange={(e)=>console.log(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                       {item}
                                    </label>
                                </div>
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
