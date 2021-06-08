import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddReceiving extends Component {
    constructor(props){
        super(props)
      
        this.state={
            formSubmitBtnStaus: false,
            receivingSummary:{
                id:'',
                po:'',
                qut_ref_no:'',
                receiving_date:'',
                supplier_id:1,
                items:[],
            },
            formError:{},
            
        }
    }


formSubmit = (e) =>{
    e.preventDefault()

    axios.post('http://localhost:8000/api/v1/receiving', this.state.receivingSummary)
    .then(res => {
        // console.log(res)
        this.setState({
            formError:{}
        })
        
        this.props.history.push(`/receiving/${res.data.id}`)
    })
    .catch(error =>{
        // console.log(error.response)
        if(error.response.status === 422) {
            this.setState({
                formError:error.response.data
            })
        }
    })
}
   

render(){
        const {formError,formSubmitBtnStaus,receivingSummary} = this.state
        return (
            <div className="">
            {
                Object.keys(formError).length > 0 &&
                    <div>
                            <div className="alert alert-danger" role="alert">
                              {formError.message}
                            </div>

                            
                    {
                        formError.errors &&
                        <div className="alert alert-danger" role="alert">
                               {
                                   Object.values(formError.errors).map( (error,key) =>{
                                   return(
                                       <div key={key} className="p-2">
                                        <span>{error}</span>
                                        </div>
                                         )
                                        })
                                }
                        </div>
                    }
                                
                    </div>
                        
                        
                
                }
              
               
                
                    <div className="card ">
                        <div className="card-header">
                            New Receiving
                        </div>
                    <div className="card-body">
                            <form className="addReceivingForm">

                                <div className="row">  
                                    <div className="col col-md-6">

                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput">Receiving Date</label>
                                            <input type="date" className="form-control" id="formGroupExampleInput" required
                                                onChange={ (e) => this.setState({receivingSummary:{
                                                    ...receivingSummary,
                                                    receiving_date:e.target.value
                                                    }})}
                                            />
                                        </div>

                                    </div>
                                    
                                    <div className="col col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="formGroupExampleInput">Supplier</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput" 
                                                    onChange={ (e) => this.setState({receivingSummary:{
                                                        ...receivingSummary,
                                                        supplier:e.target.value
                                                    }})
                                                    }
                                                />
                                            </div>
                                    </div>

                                </div>
                              
                
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="PO" required
                                        onChange={ (e) =>this.setState({receivingSummary:{
                                    ...receivingSummary,
                                    po:e.target.value
                                    }})}

                                   />

                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Request Ref No"
                                    onChange={ (e) => this.setState({receivingSummary:{
                                        ...receivingSummary,
                                        req_ref_no:e.target.value
                                    }})}
                                    />

                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Quataion Ref No"
                                    onChange={ (e) => this.setState({receivingSummary:{
                                        ...receivingSummary,
                                        qut_ref_no:e.target.value
                                    }})}
                                    />

                                </div>
                
                                    <button className="btn btn-primary btn-sm" type="submit" 
                                        onClick={ (e)=> this.formSubmit(e)}
                                        disabled={ formSubmitBtnStaus}
                                    >SAVE</button>
                            </form>

                            <br />
                          
                    </div>

                   

                    </div>

            </div>
        )
 } // end of render
}

const mapStateToProps = ({dispatch})=>{
    return{
        dispatch
    }
}

export default connect(mapStateToProps)(AddReceiving);