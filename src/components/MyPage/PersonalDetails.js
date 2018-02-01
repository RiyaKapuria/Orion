import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoading from '../PageLoading';
import { personalDetails } from '../../actions/User';


class PersonalDetails extends Component {
  componentWillMount() {
    this.props.personalDetails()
   }

  render() {
    let personal_details =
    (this.props.userDetailsReducer && this.props.userDetailsReducer.personal_details) ?
    this.props.userDetailsReducer.personal_details.user : [];
    return (
      <div>
        { personal_details.length <= 0 ?
          <PageLoading />
          :
          <div>
           <section className="content-header">
             <h1>Personal Details
               <a className="btn pull-right">
                 <i className="fa fa-edit"></i> Edit Profile
               </a>
             </h1>
           </section>
           <section className="content">
             <div className="row">
               <div className="col-md-6">
                 <div className="box box-widget widget-user">
                   <div className="widget-user-header bg-aqua-active" style={{background: 'url('+ '../dist/img/sedin.png' + ') center center'}}>
                     <h3 className="widget-user-username"><b>{personal_details.firstname} {personal_details.lastname}</b></h3>
                     <h5 className="widget-user-desc">{personal_details.designation_name}</h5>
                   </div>
                   <div className="widget-user-image">
                     <img className="img-circle" src="../dist/img/riya.jpg" alt="User Avatar" />
                   </div>
                   <div className="box-footer">
                     <div className="row">
                       <div className="col-sm-4 border-right">
                         <div className="description-block">
                           <h5 className="description-header">{personal_details.emp_code}</h5>
                           <span className="description-text">Employee ID</span>
                         </div>
                       </div>
                       <div className="col-sm-4 border-right">
                         <div className="description-block">
                           <h5 className="description-header">{personal_details.username}</h5>
                           <span className="description-text">Username</span>
                         </div>
                       </div>
                       <div className="col-sm-4">
                         <div className="description-block">
                           <h5 className="description-header">{personal_details.no_of_projects}</h5>
                           <span className="description-text">Projects</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="box  box-warning">
                   <div className="box-header with-border">
                     <h3 className="box-title">Leave Information</h3>
                   </div>
                   <div className="box-body">
                     <table className="table table-bordered">
                       <tbody>
                         <tr>
                           <th>Type of Leave</th>
                           <th>Percentage</th>
                           <th style={{width: "100px"}}>Casual Leave</th>
                         </tr>
                         <tr>
                           <td>Carry Forward Leave</td>
                           <td>
                             <div className="progress progress-xs">
                               <div className="progress-bar progress-bar-danger" style={{width: "55%"}}></div>
                             </div>
                           </td>
                           <td><span className="badge bg-red">55%</span></td>
                         </tr>
                         <tr>
                           <td>Leave in this quarter</td>
                           <td>
                             <div className="progress progress-xs">
                               <div className="progress-bar progress-bar-yellow" style={{width: "70%"}}></div>
                             </div>
                           </td>
                           <td><span className="badge bg-yellow">70%</span></td>
                         </tr>
                         <tr>
                           <td>Pending Approval</td>
                           <td>
                             <div className="progress progress-xs progress-striped active">
                               <div className="progress-bar progress-bar-primary" style={{width: "30%"}}></div>
                             </div>
                           </td>
                           <td><span className="badge bg-light-blue">30%</span></td>
                         </tr>
                         <tr>
                           <td>Leave Approved	</td>
                           <td>
                             <div className="progress progress-xs progress-striped active">
                               <div className="progress-bar progress-bar-success" style={{width: "90%"}}></div>
                             </div>
                           </td>
                           <td><span className="badge bg-green">90%</span></td>
                         </tr>
                         <tr>
                           <td>Remaining Leave Balance</td>
                           <td>
                             <div className="progress progress-xs">
                               <div className="progress-bar progress-bar-danger" style={{width: "55%"}}></div>
                             </div>
                           </td>
                           <td><span className="badge bg-red">55%</span></td>
                         </tr>
                         <tr>
                           <td>Leave On LOP</td>
                           <td>
                             <div className="progress progress-xs progress-striped active">
                               <div className="progress-bar progress-bar-primary" style={{width: "30%"}}></div>
                             </div>
                           </td>
                           <td><span className="badge bg-light-blue">30%</span></td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div className="box-footer">
                     <Link to="/Leave">
                       <button type="button" className="btn bg-maroon margin">
                         View More &nbsp;
                         <span className="fa fa-angle-double-right"></span>
                       </button>
                     </Link>
                   </div>
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="box box-success">
                   <div className="box-header with-border">
                     <h3 className="box-title">About Me</h3>
                   </div>
                   <div className="box-body">
                     <strong>Employee code</strong>
                     <p className="text-muted">{personal_details.emp_code}</p>
                     <hr />
                     <strong>Username</strong>
                     <p className="text-muted">{personal_details.username}</p>
                     <hr />
                     <strong>Firstname</strong>
                     <p className="text-muted">{personal_details.firstname}</p>
                     <hr />
                     <strong>Lastname</strong>
                     <p className="text-muted">{personal_details.lastname}</p>
                     <hr />
                     <strong>Education</strong>
                     <p className="text-muted">{personal_details.education}</p>
                     <hr />
                     <strong>Gender</strong>
                     <p className="text-muted">{personal_details.gender}</p>
                     <hr />
                     <strong>Marital Status</strong>
                     <p className="text-muted">{personal_details.marital_status}</p>
                     <hr />
                     <strong>Date of Birth</strong>
                     <p className="text-muted">{personal_details.date_of_birth}</p>
                     <hr />
                     <strong>Blood Group</strong>
                     <p className="text-muted">{personal_details.blood_group}</p>
                     <hr />
                     <strong>Total Experience</strong>
                     <p className="text-muted">{personal_details.total_experience}</p>
                   </div>
                 </div>
               </div>
             </div>
           </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
