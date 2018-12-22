import React, { Component } from 'react';
import './App.css';
import {Redirect } from 'react-router-dom'
class Login extends Component {

  onsubmit=()=>{
    if('admin'===this.refs.emailId.value && 'admin'===this.refs.password.value){
        return <Redirect to='/App'  />
    }
    else {
       return <Redirect to='/login'  />
    }
  }
  render() {
    return (
      <form className="loginform">
        <div className="form-group row">
          <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-6">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" ref="emailId"/>
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-6">
            <input type="Password " className="form-control" id="inputPassword3" placeholder="Password" ref="password"/>
          </div>
        </div>
      <div className="form-group row">
        <div className="col-sm-10">
         <button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Sign in</button>
        </div>
      </div>
    </form>
    );
  }
}

export default Login;
