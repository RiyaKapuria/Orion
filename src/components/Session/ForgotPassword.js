import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ForgotPassword extends Component {
  render() {
    return (
      <div className="lockscreen-wrapper">
        <div className="lockscreen-logo">
          <b>Orion</b>Application
        </div>
        <br />
        <div className="lockscreen-item">
          <div className="lockscreen-image">
            <img src="../../dist/img/email.png" alt="O A" />
          </div>
          <form className="lockscreen-credentials">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-btn">
                <button type="button" className="btn"><i className="fa fa-arrow-right text-muted"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div className="help-block text-center">
          Enter your email id to reset your password
        </div>
        <div className="text-center">
          <Link to="/">Or sign in as a different user</Link>
        </div>
      </div>
    );
  }
}
