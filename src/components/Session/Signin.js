import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import { loginDetails } from '../../actions/Session';
import { App } from '../../App';
import Error500 from '../Error/Error500';


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: '',
        password: ''
      },
      errors: {},
      formIsValid : true
    }
  }

  //Input change
  onChange(field, e) {
    this.state.errors["inputs"] = '';
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }

  //Sign in
  onSignin() {
    this.state.formIsValid = true;
    if(!this.state.fields["username"]) {
      this.state.errors["username"] = "Username is required";
      this.state.formIsValid = false;
    }
    if(!this.state.fields["password"]) {
      this.state.errors["password"] = "Password is required";
      this.state.formIsValid = false;
    }
    const {loginDetails} = this.props;
    loginDetails({
      username: this.state.fields.username,
      password: this.state.fields.password
    })
  }

  failSignin() {
    if(this.state.fields["username"] && this.state.fields["password"] && this.state.formIsValid) {
      this.state.errors["username"] = "";
      this.state.errors["password"] = "";
      this.state.errors["inputs"] = "Wrong user details";
    }
  }

  successSignin() {
    if(this.props.sessionReducer && this.props.sessionReducer.data) {
      if(this.props.sessionReducer.data.msg === "success") {
        Cookies.set('Token', this.props.sessionReducer.data.access_token, { expires: 15 });
        Cookies.set('ID', this.props.sessionReducer.data.id, { expires: 15 });
        this.state.errors = "";
        window.location.replace('/Dashboard');
      }
    }
    // else if(this.props.sessionReducer && this.props.sessionReducer.error) {
    //   window.location.replace('/Error404');
    // }
  }

  render() {
    let session_details =
    (this.props.sessionReducer && this.props.sessionReducer.data) ?
    this.props.sessionReducer.data.msg : [] ;
    let session_error = this.props.sessionReducer.error ;
    {session_details === "failure" ? this.failSignin() : this.successSignin() }
    return (
      <div>
        { session_error ?
          <Error500 />
          :
          <div className="login-box">
            <div className="login-logo">
              <b>Orion</b>Application
            </div>
            <div className="login-box-body">
              <p className="login-box-msg">Sign in to start your session</p>
              { !this.state.errors["username"] ?
                <div className="form-group has-feedback">
                  <input
                    className="form-control"
                    placeholder="Enter Username ..."
                    value={this.state.fields["username"]}
                    onChange={this.onChange.bind(this, "username")}
                  />
                  <span className="glyphicon glyphicon-user form-control-feedback"></span>
                  <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                </div>
                :
                <div className="form-group has-warning">
                  <label className="control-label" htmlFor="inputWarning"><i className="fa fa-bell-o"></i> Input with warning</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputWarning"
                    placeholder="Enter Username ..."
                    value={this.state.fields["username"]}
                    onChange={this.onChange.bind(this, "username")}
                  />
                  <span className="help-block">Username is required</span>
                </div>
              }
              { !this.state.errors["password"] ?
                <div className="form-group has-feedback">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password ..."
                    value={this.state.fields["password"]}
                    onChange={this.onChange.bind(this, "password")}
                   />
                  <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                  <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                </div>
                :
                <div className="form-group has-warning">
                  <label className="control-label" htmlFor="inputWarning"><i className="fa fa-bell-o"></i> Input with warning</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputWarning"
                    placeholder="Enter Password ..."
                    value={this.state.fields["password"]}
                    onChange={this.onChange.bind(this, "password")}
                  />
                  <span className="help-block">Password is required</span>
                </div>
              }
              <div className="row">
                <div className="col-xs-12">
                  <label className="control-label" htmlFor="inputError" style={{color: "red"}}>
                    {this.state.errors["inputs"] ?
                    <i className="fa fa-times-circle-o"></i> : null} {this.state.errors["inputs"]}
                  </label>
                  <button type="submit" className="btn btn-primary btn-flat pull-right" onClick={this.onSignin.bind(this)} >Sign In</button>
                </div>
              </div>
              <Link to="/ForgotPassword">I forgot my password</Link>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionReducer: state.sessionReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDetails: (login_details, loggedIn, errors, data) => {
      dispatch(loginDetails(login_details, loggedIn, errors, data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
