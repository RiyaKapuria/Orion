import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageLoading from '../PageLoading';
import { personalDetails } from '../../actions/User';
import ManagerProject from './ManagerProject';
import MyAllocation from '../MyPage/MyAllocation';

class Project extends Component {
  componentWillMount() {
    this.props.personalDetails();
  }

  render() {
    let personal_details = (this.props.userDetailsReducer && this.props.userDetailsReducer.personal_details) ?
    this.props.userDetailsReducer.personal_details.user : [] ;
    return (
      <div>
      { personal_details.length <= 0 ?
        <div className="row">
          <PageLoading />
        </div>
         :
        <div>
          { personal_details.designation_name === "Manager" ?
            <ManagerProject />
            :
            <MyAllocation />
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(Project);
