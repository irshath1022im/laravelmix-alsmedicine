import React from 'react'
import { connect } from 'react-redux'
import { getCategoryAction } from '../../redux/actions/categoryActions'
import { searchItems } from '../../redux/actions/itemAction'
import {FaTimesCircle } from 'react-icons/fa'


class ItemSearch extends React.Component {
    constructor(props){
        super(props)
        this.state={
            searchValue:'',
            filterBy:''
        }
    }

componentDidMount () {
    this.props.dispatch(getCategoryAction());
}

search = ()=>{
 const {searchValue, filterBy} = this.state;


 this.props.dispatch(searchItems(`${process.env.MIX_API_URL}/item?searchValue=${searchValue}&&filterBy=${filterBy}`));

}

    render(){
        const{searchValue, filterBy} = this.state;
        const {category} = this.props
        return(
            <div className="d-flex">
                <input type="text" placeholder="Search Item" className="form-control"
                    value={searchValue}
                    onChange={ (e)=>this.setState({
                        searchValue: e.target.value
                    }, this.search)
                }
                />

                {
                    searchValue !==  '' &&
                    <div className="d-flex align-items-center">
                                    <FaTimesCircle
                                        onClick={ ()=> this.setState({searchValue:''}, this.search)}/>
                     </div>
                }

                {
                    category.length > 0 &&

                    <select className="custom-select my-1 mr-sm-2 form-control"
                        onChange={ (e)=>this.setState({filterBy: e.target.value},this.search)}>
                        <option value=''>Filter...</option>
                    {
                        category.map( item => {
                            return (
                                // <option key={item.id} value={item.id}>{item}</option>
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })
                    }
                    </select>
                }

            </div>
         )
        }
}

const mapStateToProps = ({categoryStore}) =>{
    return{
        category: categoryStore
    }
}

export default connect(mapStateToProps)(ItemSearch)
