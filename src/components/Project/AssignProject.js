import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';

import { projectAssign } from '../../actions/Project';

class AssignProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        empname: '',
        projectname: '',
        reportingperson: '',
        empstatus: 'Allocated'
      },
      filter_item: null,
      search_item: '',
      activePage: 1,
      fromDate: new Date(),
      toDate: new Date()
    };
    this.onClear = this.onClear.bind(this);
  }

  //Date filter
  onFromDate(fromDate) {
    this.setState({ fromDate });
    console.log(fromDate);
  }

  onToDate(toDate) {
    this.setState({ toDate });
    console.log(toDate);
  }

  //Input change
  onChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState ({fields});
    console.log(fields);
  }

  //Search Employee by Name
  handleSearch(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState ({
      activePage: 1,
      filter_item: null,
      search_item: e.target.value
    }, () => {
     this.props.projectAssign ({
       page: this.state.activePage,
       filter: this.state.filter_item,
       search: this.state.search_item
     });
    });
  }

  //Search Dropdown
  searchDropdown(value) {
    this.setState ({
      fields: {
        empid: value.emp_code,
        empfirstname: value.firstname,
        emplastname: value.lastname,
        empdepertment: value.department_name,
        empname: (value.firstname).concat(" ").concat(value.lastname)
      }
    })
  }

  //Clear Input
  onClear() {
    this.setState ({
      fields: {
        empname: '',
        projectname: '',
        reportingperson: '',
        empstatus: 'Allocated',
        empid: '',
        empfirstname: '',
        emplastname: '',
        empdepertment: ''
      },
      filter_item: null,
      search_item: '',
      activePage: 1,
      fromDate: new Date(),
      toDate: new Date()
    })
  }


  render() {
    let user_details =
    (this.props.projectDetailsReducer && this.props.projectDetailsReducer.project_assign) ?
    user_details = this.props.projectDetailsReducer.project_assign.users : []
    console.log("user_details",user_details);
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title"><b>Assign Projects To Employees</b></h3>
            </div>
            <div className="box-body">
              <div className="row">
                <div className="col-xs-6">
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><b>@</b></span>
                    { user_details.length <= 0
                      ?
                      <input
                        readOnly
                        className="form-control"
                        placeholder="Employee ID"
                       />
                       :
                       <div className="form-control">
                         {this.state.fields["empid"]}
                       </div>
                      }
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-user"></i></span>
                    { user_details.length <= 0 ?
                      <input
                        type="text"
                        className="form-control dropdown-toggle"
                        data-toggle="dropdown"
                        placeholder="Employee Name"
                        value={this.state.fields["empname"]}
                        onChange={this.handleSearch.bind(this, "empname")}
                      />
                      :
                      <input
                        type="text"
                        className="form-control dropdown-toggle"
                        data-toggle="dropdown"
                        placeholder="Search Employee Again ..."
                        value={this.state.fields["empname"]}
                        onChange={this.handleSearch.bind(this, "empname")}
                      />
                    }
                    <ul className="dropdown-menu" role="menu">
                      { user_details.map((values,key) => {
                        return (
                          <li key={key}>
                            <div className="user-block" onClick={this.searchDropdown.bind(this, values)}>
                              <img className="img-circle img-bordered-sm" src="dist/img/riya.jpg" alt="User" />
                              <span className="username"><a>{values.firstname} {values.lastname}&emsp;</a></span>
                              <span className="description">{values.department_name}</span>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-briefcase"></i></span>
                    { user_details.length <= 0 ?
                    <input
                      readOnly
                      className="form-control"
                      placeholder="Project Name"
                     />
                     :
                     <input
                       type="text"
                       className="form-control"
                       placeholder="Project Name"
                       value={this.state.fields["projectname"]}
                       onChange={this.onChange.bind(this, "projectname")}
                      />
                   }
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-male"></i></span>
                    { user_details.length <= 0 ?
                      <input
                        readOnly
                        className="form-control"
                        placeholder="Reporting Person"
                      />
                      :
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Reporting Person"
                        value={this.state.fields["reportingperson"]}
                        onChange={this.onChange.bind(this, "reportingperson")}
                      />
                    }
                  </div>
                  <br />
                  <div className="input-group">
                    <span style={{color: "#3c8dbc"}} className="input-group-addon"><i className="fa fa-desktop"></i></span>
                    { user_details.length <= 0
                      ?
                      <input
                        readOnly
                        className="form-control"
                        placeholder="Depertment"
                      />
                      :
                      <div className="form-control">
                        {this.state.fields["empdepertment"]}
                      </div>
                    }
                  </div>
                  <br />
                </div>
                <div className="col-xs-6">
                  <div className="form-group">
                    <label style={{color: "#3c8dbc"}}>Status</label>
                    <select
                      className="form-control select2 select2-hidden-accessible"
                      aria-hidden="true"
                      value={this.state.fields["empstatus"]}
                      onChange={this.onChange.bind(this, "empstatus")}
                    >
                      <option value="selected">Allocated</option>
                      <option>Allocated Internally</option>
                      <option>Bench</option>
                    </select>
                  </div>
                  <br/>
                  <div className="form-group">
                    <label style={{color: "#3c8dbc"}}>From Date</label>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <label style={{color: "#3c8dbc"}}>To Date</label>
                    <br />
                    <DatePicker
                      onChange={this.onFromDate.bind(this)}
                      value={this.state.fromDate}
                    />
                    &emsp;
                    <DatePicker
                      onChange={this.onToDate.bind(this)}
                      value={this.state.toDate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-footer">
              <div className="row">
                <div className="col-xs-3">
                  <button type="button" className="btn btn-warning pull-right" onClick={this.onClear}>
                    <b>Cancel</b>
                  </button>
                </div>
                <div className="col-xs-9">
                  <button type="submit" className="btn btn-info"><b>Sign in</b></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectDetailsReducer: state.projectDetailsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectAssign: (user_details) => {
      dispatch(projectAssign(user_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignProject);
