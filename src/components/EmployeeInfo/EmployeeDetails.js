import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLoading from '../PageLoading';
import { allEmp } from '../../actions/User';

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.allEmp()
   }

  render() {
    let all_emp = (this.props.userDetailsReducer && this.props.userDetailsReducer.all_emp) ?
    this.props.userDetailsReducer.all_emp.users : [];
    return (
      <div>
        { all_emp.length <= 0 ?
          <PageLoading />
          :
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">All Employee Details</h3>
            </div>
            <div className="box-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        Per Page&nbsp;
                        <span className="fa fa-caret-down"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>&emsp;Show per Page</li>
                        <li className="divider"></li>
                        <li><a href="#">10</a></li>
                        <li><a href="#">20</a></li>
                        <li><a href="#">30</a></li>
                        <li><a href="#">40</a></li>
                        <li><a href="#">50</a></li>
                        <li><a href="#">60</a></li>
                        <li><a href="#">70</a></li>
                        <li><a href="#">80</a></li>
                        <li><a href="#">90</a></li>
                        <li><a href="#">100</a></li>
                      </ul>
                    </div>
                    <input type="text" className="form-control" />
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-info btn-flat">Go!</button>
                    </span>
                  </div>
                </div>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Emp ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Department</th>
                    </tr>
                    {all_emp.map((values,key) => {
                      return(
                        <tr key={key}>
                          <td>{values.emp_code}</td>
                          <td>
                            <Link to={{
                              pathname: '/SingleEmployee',
                              state: {ID: values.id}
                            }} >
                              {values.firstname}
                            </Link>
                          </td>
                          <td>{values.lastname}</td>
                          <td>{values.email}</td>
                          <td>{values.department_name}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="box-footer clearfix">
              <div className="row">
                <div className="col-sm-5">
                  <div>Showing 1 to 10 of 557 entries</div>
                </div>
                <div className="col-sm-7">
                  <div>
                    <ul className="pagination no-margin pull-right">
                      <li className="paginate_button previous disabled">
                        <a href="#">Previous</a>
                      </li>
                      <li className="paginate_button active">
                        <a href="#">1</a>
                      </li>
                      <li className="paginate_button ">
                        <a href="#">2</a>
                      </li>
                      <li className="paginate_button ">
                        <a href="#">3</a>
                      </li>
                      <li className="paginate_button ">
                        <a href="#">4</a>
                      </li>
                      <li className="paginate_button next" id="example1_next">
                        <a href="#" tabIndex="0">Next</a>
                      </li>
                    </ul>
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
    allEmp: (all_emp) => dispatch(allEmp(all_emp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
