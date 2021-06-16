import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction } from '../../redux/actions/authentication'

class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:''
        }
    }


formSubmit =()=>{

    this.props.dispatch(loginAction())
}

    render() {
        return (
            <div className="container">
                <form>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">User Name</label>
                    <input type="text" name="userName" className="form-control" id="formGroupExampleInput" placeholder="User Name"
                    onChange={ (e)=>this.setState({ userName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput2"
                    onChange={ (e)=>this.setState({ password: e.target.value})}
                    />
                  </div>

                  <div>
                    <button className="btn btn-primary" type="button" onClick={this.formSubmit}>Submit</button>
                  </div>
                </form>

            </div>
        )
    }
}

export default connect()(Login);
