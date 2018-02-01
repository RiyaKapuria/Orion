import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

import { personalDetails } from '../../actions/User';


class ProfileTab extends Component {
  componentWillMount() {
    this.props.personalDetails();
  }

   render() {
    let personal_details = (this.props.userDetailsReducer && this.props.userDetailsReducer.personal_details) ?
    this.props.userDetailsReducer.personal_details.user : [];
    return (
      <li className="dropdown user user-menu">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <img src="dist/img/riya.jpg" className="user-image" alt="User"/>
          <span className="hidden-xs">{personal_details.firstname} {personal_details.lastname}</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <img src="dist/img/riya.jpg" className="img-circle" alt="User"/>
            <p>
              {personal_details.firstname} {personal_details.lastname}
              <small>{personal_details.designation_name}</small>
            </p>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <Link to="/PersonalDetails" className="btn btn-default btn-flat">Profile</Link>
            </div>
            <div className="pull-right">
              <button
                className="btn btn-default btn-flat"
                onClick={(Signout) => {
                  Cookies.remove('Token');
                  Cookies.remove('ID');
                  window.location.replace('/Signin');
                }} >
                Sign out
              </button>
            </div>
          </li>
        </ul>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userDetailsReducer: state.userDetailsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    personalDetails: (personal_details) => {
      dispatch(personalDetails(personal_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTab);
