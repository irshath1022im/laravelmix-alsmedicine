import axios from 'axios';
import React from 'react'
import Category from '../../components/category/Category'
import ItemList from '../../components/item/ItemList';
import Loading from '../../components/shared/Loading';



class HomeItem extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            data:[],
            loading: true
        }

    }

componentDidMount() {

    this.getItems(`${process.env.MIX_API_URL}/item`)

}

getItems = async(url) =>{
    try {
        this.setState({ loading: true})
        const result = await axios.get(url);
        //   console.log(result)
        this.setState({
            loading: false,
            data: result.data.data,
            links: result.data.links
        })

      } catch (error) {
        //   console.log(error)
      }
}
    render(){

        const {data, loading, links} = this.state;
        return(
            <div>

            <div className="row">
                <div className="col-sm-3">
                  <span>Category</span>
                  <Category />
                </div>

                <div className="col">

                        <div>
                            <input type="text" placeholder="Search Item" className="form-control" />
                        </div>


                        {
                            loading === false &&
                            data.length > 0 ?

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

                                            data.map((item) => {
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
                                        disabled = { links.first !== null ? false : true}
                                        onClick={ () => this.getItems(links.first)}>
                                        First
                                    </button>

                                    <button className="btn btn-primary" type="button"
                                            disabled = { links.next !== null ? false : true}
                                            onClick={ () => this.getItems(links.next)}
                                    >
                                        Next
                                    </button>

                                    <button className="btn btn-primary" type="button"
                                        disabled = { links.last !== null ? false : true}
                                        onClick={ () => this.getItems(links.last)}>
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


export default HomeItem;
