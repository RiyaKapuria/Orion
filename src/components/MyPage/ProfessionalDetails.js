import React, { Component } from 'react';
import { connect } from "react-redux";

import PageLoading from '../PageLoading';
import { professionalDetails } from '../../actions/User';

class ProfessionalDetails extends Component {
  componentWillMount() {
    this.props.professionalDetails()
   }

  render() {
    let professional_details = (this.props.userDetailsReducer && this.props.userDetailsReducer.professional_details) ? this.props.userDetailsReducer.professional_details.user : [];
    let salaray_account = (this.props.userDetailsReducer.professional_details && this.props.userDetailsReducer.professional_details.user.salaray_account) ? this.props.userDetailsReducer.professional_details.user.salaray_account : [];
    let certificate = (this.props.userDetailsReducer.professional_details && this.props.userDetailsReducer.professional_details.user.certificate) ? this.props.userDetailsReducer.professional_details.user.certificate : [];
    let languages = (this.props.userDetailsReducer.professional_details && this.props.userDetailsReducer.professional_details.user.languages) ? this.props.userDetailsReducer.professional_details.user.languages : [];
    return (
      <div>
        { professional_details.length <= 0 ?
          <PageLoading />
          :
          <div className="box box-widget widget-user-2">
            <div className="widget-user-header bg-yellow">
              <div className="widget-user-image">
                <img className="img-circle" src="../dist/img/riya.jpg" alt="User Avatar" />
              </div>
              <h3 className="widget-user-username">{professional_details.firstname} {professional_details.lastname}</h3>
              <h5 className="widget-user-desc">{professional_details.designation.name}</h5>
            </div>
            <div className="box box-default">
              <div className="box-header with-border">
                <h3 className="box-title">Professional Details</h3>
              </div>
              <div className="box-body">
                <strong>Email</strong>
                <p className="text-muted">{professional_details.email}</p>
                <hr />
                <strong>Salary Account</strong>
                <br /><br />
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Payment Mode</th>
                      <th>Bank Branch</th>
                      <th>Account Number</th>
                      <th>Bank Name</th>
                      <th>Pan Number</th>
                    </tr>
                    <tr>
                      <td>{salaray_account.payment_mode}</td>
                      <td>{salaray_account.bank_branch}</td>
                      <td>{salaray_account.account_number}</td>
                      <td>{salaray_account.bank_name}</td>
                      <td>{salaray_account.pan_number}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <strong>Department</strong>
                <p className="text-muted">{professional_details.department_name}</p>
                <hr />
                <strong>Designation</strong>
                <p className="text-muted">{professional_details.designation_name}</p>
                <hr />
                <strong>Date of joining</strong>
                <p className="text-muted">{professional_details.date_of_joining}</p>
                <hr />
                <strong>Total Experience</strong>
                <p className="text-muted">{professional_details.total_experience}</p>
                <hr />
                <strong>Education Qualification</strong>
                <br /><br />
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>University/College</th>
                      <th>Program</th>
                      <th>Specialization</th>
                      <th>Year</th>
                      <th>Percentage/GPA</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td>{professional_details.education}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <strong>Skills</strong>
                <br /><br />
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Skill Type</th>
                      <th>Category</th>
                      <th>Skill</th>
                      <th>Rating</th>
                      <th>Remarks</th>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <strong>Certificates</strong>
                <br /><br />
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>University/College</th>
                      <th>Active Status</th>
                      <th>Created At</th>
                    </tr>
                    <tr>
                      <td>{certificate.name}</td>
                      <td>{certificate.is_active === true ? <span className="fa fa-check"></span> : <span className="fa fa-close"></span>}</td>
                      <td>{certificate.created_at}</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <strong>Languages</strong>
                <br /><br />
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Language</th>
                      <th>Read</th>
                      <th>Write</th>
                      <th>Speak</th>
                    </tr>
                    {languages.map((values,key) => {
                      return(
                        <tr key={key}>
                          <td>{values.language}</td>
                          <td>{values.read === true ? <span className="fa fa-check"></span> : <span className="fa fa-close"></span>}</td>
                          <td>{values.write === true ? <span className="fa fa-check"></span> : <span className="fa fa-close"></span>}</td>
                          <td>{values.speak === true ? <span className="fa fa-check"></span> : <span className="fa fa-close"></span>}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
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
    professionalDetails: (personal_details) => {
      dispatch(professionalDetails(personal_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalDetails);
