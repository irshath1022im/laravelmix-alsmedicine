import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategoryAction } from '../../redux/actions/categoryActions';

class AddItem extends Component {

    constructor(props){
        super(props)

        this.state={
            category: '',
            name: '',
            erp_code:'',
            file:'',
            thumbnail: {
                base64:'',
                type:'',
                name:''
            },
            brand:'',
            initial_qty:''
        }
    }

componentDidMount(){
    this.props.dispatch(getCategoryAction())
}

convertImageToBase64 = (e)=>{
    let file = e.target.files
    // console.log(file)
    // const [type,name] = file[0];
    this.setState({
        thumbnail: {
            ...this.state.thumbnail,
            type: file[0].type,
            name: file[0].name
        }
    })
    // console.log(thumbnail)
//call the JS FIle Reader to read the uploaded file

    let reader = new FileReader();
    console.log(reader);
    reader.readAsDataURL(file[0])

// call the readAsDataURL method in fileReader

// reader.onloadstart = (e)=>{
    //     console.log(e)
    // }

    reader.onload = (event)=>{
        // console.log('hi')
        this.setState({
            file: event.target.result,
            thumbnail : {
                ...this.state.thumbnail,
                base64: event.target.result,
            }})
        }

}

formSubmit =(e)=>{
    e.preventDefault();

    this.sendData(this.state)

    // try {
    //     const result = await axios.post(`${process.env.MIX_API_URL/item}`, ...this.state)
    //     console.log(result)
    //     } catch (error) {

    //     }

}


sendData = async (data)=>{
    try {
        const result =  await axios.post(`${process.env.MIX_API_URL}/item`, data)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

render() {
        const {dispatch, categoryStore} = this.props

        return (
            <div className="container">
                <div className="card">
                  <div className="card-header">
                    New Item
                  </div>
                  <div className="card-body">

                    <form onSubmit={this.formSubmit}>

                    <div className="row">
                        <div className="col col-md-6">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Item Name</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Item Name"
                                onChange={ (e)=>this.setState({ name: e.target.value })}/>
                            </div>
                        </div>

                        <div className="col col-md-6">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">ERP CODE</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="ERP CODE"
                                onChange={ (e)=>this.setState({ erp_code: e.target.value })}
                                />

                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col col-md-6">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Initial Qty</label>
                                <input type="number" className="form-control" id="formGroupExampleInput2"
                                    placeholder="Initial Qty"
                                    onChange={ (e)=>this.setState({ initial_qty: e.target.value })}
                                    />
                            </div>

                        </div>

                        <div className="col col-md-6">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Brand</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                    placeholder="Initial Qty"
                                    onChange={ (e)=>this.setState({ brand: e.target.value })}
                                    />
                            </div>

                        </div>

                    </div>




                    <div>
                    <label htmlFor="formGroupExampleInput2">Category</label>
                    <select className="custom-select my-1 mr-sm-2"
                        onChange={ (e)=> this.setState({
                            category: e.target.value
                          })
                        }
                        >
                      <option>Choose...</option>
                      {
                          categoryStore.length > 0 &&
                          categoryStore.map(item =>{
                              return (
                                  <option key={item.id} value={item.id}>{item.name}</option>

                              )
                          })
                      }
                    </select>
                    </div>


                    {
                        !this.state.file == '' &&
                        <img src={this.state.file} style={{ width: 80, height:80}}/>
                    }

                    <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Thumbnail</label>
                    <input type="file" className="form-control-file" id="formGroupExampleInput2"
                        onChange={ (e)=>this.convertImageToBase64(e)}
                        //  onChange={ (e)=> this.setState({ thumbnail: e.target.files[0]}, ()=> this.sendData({thumbnail: this.state.thumbnail}))}
                    />
                  </div>



                   <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                   </div>


                  </form>

                  </div>
                </div>



            </div>
        )
    }
}

const mapStateToProps = ({categoryStore}) =>{
    return{
        categoryStore,
    }
}

export default connect(mapStateToProps)(AddItem)
