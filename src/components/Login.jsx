/*import React from "react";
const Login = () => {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        );
    }
export default Login; */

import React, {useContext} from 'react';
import { useSetState } from 'react-use';

import { AuthContext } from '../context/AuthContext.js';

const initialState = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const { state: ContextState, login } = useContext(AuthContext);
  const {
    isLoginPending,
    isLoggedIn,
    loginError
  } = ContextState;
  const [state, setState] = useSetState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    login(email, password);
    setState({
      email: '',
      password: ''
    });
  }

 var elUsuario = window.localStorage
 elUsuario.setItem("usuario", isLoggedIn)
    
  return (
    <form name="loginForm" onSubmit={onSubmit}>

      <div className="row">

        <div className="col-sm-3 col-md-6">
          <label htmlFor="email">Username</label>
        </div>
        
        <div className="col-sm-9 col-md-6">
          <input 
            type="text" 
            name="email" 
            onChange={e => setState({email: e.target.value})} 
            value={state.email} 
            placeholder="admin" 
          />
        </div>

        <div className="col-sm-3 col-md-6">
          <label htmlFor="password">Password</label>
        </div>
        <div className="col-sm-9 col-md-6">
            <input 
              type="password" 
              name="password" 
              onChange={e => setState({password: e.target.value})} 
              value={state.password} 
              placeholder="admin" 
            />
        </div>

        <div className="col-sm-3 col-md-6">
        </div>
        <div className="col-sm-9 col-md-6">
          <input className="primary" type="submit" value="Login" />
        </div>
        
      </div>

      { elUsuario ? 
      <div>Success.</div>
      :
      <div>{loginError.message}</div>
    }
    </form>
  )
}


export default LoginForm;