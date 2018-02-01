import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoading from '../PageLoading';
import { singleEmpDetails } from '../../actions/User';


class SingleEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.singleEmpDetails(this.props.location.state.ID)
   }

  render() {
    let signle_emp_details =
    (this.props.userDetailsReducer && this.props.userDetailsReducer.signle_emp_details) ?
    this.props.userDetailsReducer.signle_emp_details.user : [];
    return (
      <div>
        { signle_emp_details.length <= 0?
          <PageLoading />
          :
          <div>
            <div className="box box-widget widget-user">
              <div className="widget-user-header bg-green">
                <h3 className="widget-user-username"><b>{signle_emp_details.firstname} {signle_emp_details.lastname}</b></h3>
                <h5 className="widget-user-desc">{signle_emp_details.designation_name}</h5>
              </div>
              <div className="widget-user-image">
                <img className="img-circle" src="../dist/img/riya.jpg" alt="User Avatar" />
              </div>
              <div className="box-footer">
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">{signle_emp_details.emp_code}</h5>
                      <span className="description-text">Employee ID</span>
                    </div>
                  </div>
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">{signle_emp_details.username}</h5>
                      <span className="description-text">Username</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="description-block">
                      <h5 className="description-header">{signle_emp_details.no_of_projects}</h5>
                      <span className="description-text">Projects</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="box box-success">
                  <div className="box-header with-border">
                    <h3 className="box-title">About {signle_emp_details.firstname}</h3>
                  </div>
                  <div className="box-body">
                    <strong>Employee code</strong>
                    <p className="text-muted">{signle_emp_details.emp_code}</p>
                    <hr />
                    <strong>Username</strong>
                    <p className="text-muted">{signle_emp_details.username}</p>
                    <hr />
                    <strong>Firstname</strong>
                    <p className="text-muted">{signle_emp_details.firstname}</p>
                    <hr />
                    <strong>Lastname</strong>
                    <p className="text-muted">{signle_emp_details.lastname}</p>
                    <hr />
                    <strong>Education</strong>
                    <p className="text-muted">{signle_emp_details.education}</p>
                    <hr />
                    <strong>Gender</strong>
                    <p className="text-muted">{signle_emp_details.gender}</p>
                    <hr />
                    <strong>Marital Status</strong>
                    <p className="text-muted">{signle_emp_details.marital_status}</p>
                    <hr />
                    <strong>Date of Birth</strong>
                    <p className="text-muted">{signle_emp_details.date_of_birth}</p>
                    <hr />
                    <strong>Blood Group</strong>
                    <p className="text-muted">{signle_emp_details.blood_group}</p>
                    <hr />
                    <strong>Total Experience</strong>
                    <p className="text-muted">{signle_emp_details.total_experience}</p>
                  </div>
                </div>
              </div>
            </div>
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
    singleEmpDetails: (signle_emp_details) => {
      dispatch(singleEmpDetails(signle_emp_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmployee);
