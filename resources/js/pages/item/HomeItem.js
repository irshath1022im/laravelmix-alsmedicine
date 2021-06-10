import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import Category from '../../components/category/Category'
import ItemList from '../../components/item/ItemList';
import Loading from '../../components/shared/Loading';
import { getMoreItems, initialItemAction, searchItems } from '../../redux/actions/itemAction';



class HomeItem extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            searchValue:'',
        }

    }

componentDidMount() {

    // this.getItems()
    this.props.dispatch(initialItemAction())

}


searchItem = () =>{
    let searchUrl = `${process.env.MIX_API_URL}/item?searchValue=${this.state.searchValue}`
    this.props.dispatch(searchItems(searchUrl))
}

render(){
        const {dispatch} = this.props;
        const {items, loading, links} = this.props.itemStore;
        return(
            <div>

            <div className="row">
                <div className="col-sm-3">
                  <span>Category</span>
                  <Category />
                </div>

                <div className="col">

                        <div>
                            <input type="text" placeholder="Search Item" className="form-control"
                                onChange={ (e)=>this.setState({ searchValue: e.target.value},this.searchItem)
                            }
                            />
                        </div>


                        {
                            loading === false &&
                            items.length > 0 ?

                        <div>
                           
                            <table className="table" >
                                <thead className="thead-inverse">
                                <tr>
                                    <th scope="col">ERP CODE</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">CATEGORY</th>
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">INITIAL QTY</th>
                                </tr>
                                </thead>
                                <tbody>
                                     {

                                            items.map((item) => {
                                                return(
                                                    <ItemList items = {item} key={item.id} />
                                                )
                                            })
                                      }
                                </tbody>
                            </table>

                        </div>

                        :
                            <Loading message ="Getting Item List" />

                        }

                        <div>

                            {
                                !loading &&


                                <div>
                                    <button className="btn btn-primary" type="button"
                                        disabled = { links.prev !== null ? false : true}
                                        onClick={ () => dispatch(getMoreItems(links.first))}>
                                        First
                                    </button>

                                    <button className="btn btn-primary" type="button"
                                            disabled = { links.next !== null ? false : true}
                                            onClick={ () => dispatch(getMoreItems(links.next))}
                                    >
                                        Next
                                    </button>

                                    <button className="btn btn-primary" type="button"
                                        disabled = { links.next !== null ? false : true}
                                        onClick={ () => dispatch(getMoreItems(links.last))}>
                                        Last
                                    </button>
                                </div>


                            }


                        </div>

                </div>
            </div>


        </div>

        )
    }
}


const mapStateToProps = ({item}) => {
    return{
        itemStore: item
    }
}

export default connect(mapStateToProps)(HomeItem);
