import React, { Component } from 'react';
import { connect } from 'react-redux';

import { otherDetails } from '../../actions/User';

class Skills extends Component {
  componentWillMount() {
    this.props.otherDetails()
   }

  render() {
    return (
      <div className="box box-solid">
        <div className="box-body">
          <strong>Present Address</strong>
          <br /><br />
          <div className="table-responsive">
            <table className="table no-margin">
              <thead>
                <tr>
                  <th>Skill Type</th>
                  <th>Category</th>
                  <th>Skill</th>
                  <th>Rating(1-Low 10-High)</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary</td>
                  <td>Web Design</td>
                  <td>Wireframes</td>
                  <td>
                    <div className="progress progress-xs">
                      <div className="progress-bar progress-bar-primary" style={{width: "70%"}}></div>
                    </div>
                  </td>
                  <td>something</td>
                </tr>
                <tr>
                  <td>Primary</td>
                  <td>Web Design</td>
                  <td>Wireframes</td>
                  <td>
                    <div className="progress progress-xs">
                      <div className="progress-bar progress-bar-primary" style={{width: "70%"}}></div>
                    </div>
                  </td>
                  <td>something</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
    otherDetails: (other_details) => {
      dispatch(otherDetails(other_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
