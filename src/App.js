import React, { Component } from 'react';
import { connect } from "react-redux";
import Cookies from 'js-cookie';

import SideBar from './components/SideBar';
import Footer from './components/Footer';
import AppTheme from './components/AppTheme';
import Header from './components/Header/Header';
import ContentArea from './components/ContentArea';
import Error500 from './components/Error/Error500';
import { personalDetails } from './actions/User';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: Cookies.get('theme')
    }
  }

  changeTheme = (themeValue) => {
    this.setState({theme: themeValue});
    Cookies.set('theme', themeValue);
  }

  componentWillMount() {
    this.props.personalDetails()
  }

  render() {
    let classTheme = (Cookies.get('theme')) ? this.state.theme : "skin-purple" ;
    let personal_details = (this.props.userDetailsReducer && this.props.userDetailsReducer.personal_details) ?
    this.props.userDetailsReducer.personal_details.user : [];
    return (
      <div>
        { !personal_details ?
          <Error500 />
          :
          <div className={classTheme} style={{position: "relative"}}>
            <Header />
            <SideBar />
            <ContentArea />
            <Footer />
            <AppTheme onchangeTheme={this.changeTheme} />
          </div>
        }
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
