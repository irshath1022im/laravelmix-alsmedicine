import axios from 'axios'
import React from 'react'
import { FaCartPlus, FaTimesCircle } from 'react-icons/fa'
import { connect } from 'react-redux'
import Loading from '../shared/Loading'

class NewReceivingItem extends React.Component {
    constructor(props){
        super(props)

        this.state= {
            searchValue:'',
            searchResult:[],
            searchResultLoadingStatus: false,
            selecteditem:{},
            expiry_date:'',
            qty:'',
            unit_price:'',
            remark:'',
            receiving_items:[],
            formErrorMsg:'',
            formSubmitStatus:false
        }
    }

search = async()=>{

    if(this.state.searchValue === ''){
        this.setState({
            ...this.state,
            searchResult:[]
        })
    }
    else {

            try {
                this.setState({
                    ...this.state,
                    searchResultLoadingStatus: true
                })
            const result = await axios.get(`http://localhost:8000/api/v1/item?searchValue=${this.state.searchValue}`)
                this.setState({
                    ...this.state,
                    searchResult: result.data.data,
                    searchResultLoadingStatus: false
                })
                
            } catch (error) {
                
            }
        }
}


addToSelectedItem = (item)=>{
    this.setState({
        ...this.state,
        selecteditem: item
    })

}

addToReceivingItem = async(e)=>{

  e.preventDefault();

  this.setState({
    ...this.state,
    formSubmitStatus: true,
    formErrorMsg:'',
    searchValue:'',
    searchResult:[]
        })
  
    let newItem =  {
        receiving_id: this.props.receiving_id, 
        item_id : this.state.selecteditem.id,
        erp_code: this.state.selecteditem.erp_code,
        qty: this.state.qty,
        unit_price: this.state.unit_price,
        cost: this.state.qty * this.state.unit_price,
        expiry_date:this.state.expiry_date,
        remark: this.state.remark
        }

   

    try {
        const result = await axios.post('http://localhost:8000/api/v1/receivingItem', { ...newItem})
        // console.log(result.status)
        if(result.status === 200) {

                this.setState({
                    ...this.state,
                    formSubmitStatus: false,
                    formErrorMsg:'Item has been added',
                    selecteditem:{},
                    receiving_items:[],
                    qty:'',
                    unit_price:'',
                    expiry_date:'',
                })

            }


    } catch (error) {
        // console.log(error.response)
        if(error.response !== undefined){
            this.setState({
                ...this.state,
                formErrorMsg: error.response.statusText,
                formSubmitStatus: false
            })
         } else {
            
            this.setState({
                ...this.state,
                formErrorMsg: 'Error in Client Site...',
                formSubmitStatus: false
            })
         }
    }

}
  render() {
      const {searchResultLoadingStatus,searchResult, searchValue,selecteditem, qty, unit_price, expiry_date,formSubmitStatus,formErrorMsg} = this.state;
    return (
      <div>

      {
          formErrorMsg !== '' &&
          <div className="alert alert-warning" role="alert">
                {formErrorMsg}
          </div>
      }
        {
            !formSubmitStatus ?
            <div className="card border-secondary mb-3">
                <div className="card-header">New Item</div>
                <div className="card-body text-primary">
                        <form>
                        <button className="btn btn-outline-success btn-sm" type="button">Search Item</button>
                        
                        <div className="d-flex">
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search" 
                            onChange={ (e) => this.setState({ searchValue: e.target.value }, ()=> this.search() )} 
                            value={searchValue}/>
                            
                            <div className="d-flex align-items-center">
                                <FaTimesCircle onClick={ ()=> this.setState({searchValue:'', searchResult:[]})}/>
                            </div>
                        </div>
      
                        <div>
                        {
                            searchResultLoadingStatus ?
                            <Loading message="Waiting for Result" />

                            :
                            searchResult.length > 0 &&
                            
                            searchResult.map((item,key)=>{
                                return (
                                    <div key={key} className="d-flex p-1 text-small" style={{ fontSize:12}}>
                                        <div className="d-flex">
                                        <li className="list-group-item text-small" >{item.erp_code}</li>
                                        <li className="list-group-item text-small" >{item.name}</li>
                                        </div>

                                        <FaCartPlus size="1.2rem" onClick={ ()=> this.addToSelectedItem(item)} />

                                       
                                    </div>
                                )
                            })
                            
                        }
                        </div>

                        <hr></hr>

                        <div className="d-flex flex-wrap">

                            <div>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Erp Code" defaultValue={selecteditem.erp_code} disabled/>
                            </div>

                            <div>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Item" defaultValue={selecteditem.name} disabled/>
                            </div>

                            <div>
                                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Qty" 
                                onChange={(e)=>this.setState({ qty: Number(e.target.value)})} value={qty} />
                                
                                {
                                    qty === '' &&
                                    <p className="form-text text-danger text-primary">
                                        * required
                                    </p>
                                }
                            
                            </div>

                            <div>
                             <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Unit Price"
                                onChange={(e)=> this.setState({unit_price: Number(e.target.value)})}  value={unit_price}/>
                                {
                                    unit_price === '' &&
                                    <p className="form-text text-danger text-primary">
                                        * required
                                    </p>
                                }
                            </div>

                            <div>
                             <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Total" value={qty * unit_price} readOnly/>
                             
                            </div>
                            
                           <div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button">Expiry Date</button>
                                    </div>

                                    <input type="date" className="form-control" onChange={ (e)=>this.setState({ expiry_date: e.target.value})}/>
                                   
                                </div>
                                {
                                    expiry_date === '' &&
                                    <p className="form-text text-danger text-primary">
                                        * required
                                    </p>
                                }
                            </div>

                            <div>
                            <input type="textarea" className="form-control" onChange={(e)=>this.setState({ remark: e.target.value})} placeholder="Remark" />

                            </div>
                        </div>

                        <button className="btn btn-success btn-sm" type="button" 
                            disabled={Object.keys(selecteditem).length > 0 && expiry_date !== '' && qty !== '' && unit_price !== '' ? false : true}
                            onClick={ (e)=>this.addToReceivingItem(e)}>Add to List</button>
                    
                        </form>
                        
            
                </div>
            </div>
            
          :
           <Loading  message="Sending Request..." />             
        }
        </div>
    )
  }
}



export default connect()(NewReceivingItem);