import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import DatePicker from 'react-date-picker';

import PageLoading from '../PageLoading';
import { projectDetails } from '../../actions/Project';

class ManagerProject extends Component {
  constructor(props) {
    let to_date = new Date().setDate(new Date().getDate() + 1)
    super(props);
    this.state = {
      filter_item: null,
      search_item: '',
      activePage: 1,
      fromDate: new Date(),
      toDate: new Date()
    };
    this.handleGoClick = this.handleGoClick.bind(this);
  }

  componentWillMount() {
    let input = {
      page: this.state.activePage,
      filter: this.state.filter_item,
      search: null
    };
    this.props.projectDetails(input);
  }

  //Pagination
  handlePageChange(pageNumber) {
    let search_item = this.state.search_item === '' ? null : this.state.search_item
    this.setState ({activePage: pageNumber}, () => {
     this.props.projectDetails ({
       page: this.state.activePage,
       filter: this.state.filter_item,
       search: search_item
     });
    });
    window.scrollTo(0, 0);
  }

  //Filter
  filter(value) {
   this.setState ({
     activePage: 1,
     filter_item: value,
     search_item: ''
   }, () => {
    this.props.projectDetails ({
      page: this.state.activePage,
      filter: this.state.filter_item,
      search: null
    });
   });
   window.scrollTo(0, 0);
  }

  //Search Box
  handleSearch(search_item, e) {
   this.setState ({search_item: e.target.value})
  }

  handleGoClick() {
   this.setState ({
     activePage: 1,
     filter_item: null,
     search_item: this.state.search_item
   }, () => {
    this.props.projectDetails ({
      page: this.state.activePage,
      filter: this.state.filter_item,
      search: this.state.search_item
    });
   });
   window.scrollTo(0, 0);
  }

  //Date filter
  onFromDate = fromDate => this.setState({ fromDate })
  onToDate = toDate => this.setState({ toDate })


  render() {
    let user_details =
    (this.props.projectDetailsReducer && this.props.projectDetailsReducer.project_details) ?
    user_details = this.props.projectDetailsReducer.project_details.users : [] ;
    return (
      <div className="row">
        { user_details.length <= 0 ?
          <PageLoading />
          :
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <div className="row">
                  <div className="col-md-4">
                    <div className="input-group margin">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Employee ..."
                        onChange={this.handleSearch.bind(this, "search_item")}
                        value={this.state.search_item}  />
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="btn btn-info btn-flat"
                          onClick={this.handleGoClick}
                        >Go!</button>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <b style={{color: "#3c8dbc"}}>From Date (mm/dd/yyyy) </b>
                    &emsp;
                    <b style={{color: "#3c8dbc"}}>To Date (mm/dd/yyyy)</b>
                    <br />
                    <DatePicker
                      onChange={this.onFromDate}
                      value={this.state.fromDate}
                    />&emsp;&emsp;
                    <DatePicker
                      onChange={this.onToDate}
                      value={this.state.toDate}
                    />
                  </div>
                  <div className="col-md-1">
                    <Link to="/AssignProject" className="btn btn-app pull-right">
                      <div style={{color: "#3c8dbc"}} className="fa fa-user-plus"></div>
                      <p style={{color: "#3c8dbc"}}>Assign Project</p>
                    </Link>
                  </div>
                </div>
                <h3 className="box-title"><b>Project Allocation Details</b></h3>
              </div>
              <div className="box-body table-responsive no-padding">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>
                        <div className="btn-group">
                          <button type="button" className="btn btn-default btn-sm bg-purple">
                            <b>{this.state.filter_item === null ? "Status" : this.state.filter_item}</b>
                          </button>
                          <button type="button" className="btn btn-default btn-sm bg-purple dropdown-toggle" data-toggle="dropdown">
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                            <li><a onClick={this.filter.bind(this, null)}>Allocated Internally</a></li>
                            <li><a onClick={this.filter.bind(this, "Allocated")}>Allocated</a></li>
                            <li><a onClick={this.filter.bind(this, "Bench")}>Bench</a></li>
                            <li className="divider"></li>
                            <li><a onClick={this.filter.bind(this, null)}>Remove Filter</a></li>
                          </ul>
                        </div>
                      </th>
                      <th style={{width: "30px"}}>ID</th>
                      <th style={{width: "200px"}}>User</th>
                      <th style={{width: "200px"}}>Project Name</th>
                      <th style={{width: "90px"}}>From Date</th>
                      <th style={{width: "90px"}}>To Date</th>
                      <th style={{width: "200px"}}>Reporting Person</th>
                      <th style={{width: "100px"}}>Depertment</th>
                    </tr>
                    { user_details.map((values,key) => {
                      return (
                        <tr key={key}>
                          <td>
                            { values.user_status === "Allocated"
                              ?
                              <span className="label label-success">{values.user_status}</span>
                              :
                              <span className="label label-warning">Bench</span>
                            }
                          </td>
                          <td>{values.emp_code}</td>
                          <td>{values.firstname} {values.lastname}</td>
                          <td>
                            { values.projects.map((values,key) => {
                                return (<p key={key}>{values.name}</p>)
                            })}
                          </td>
                          <td>
                            { values.projects.map((values,key) => {
                                return (<p key={key}>{values.start_date}</p>)
                            })}
                          </td>
                          <td>
                            { values.projects.map((values,key) => {
                                return (<p key={key}>{values.end_date}</p>)
                            })}
                          </td>
                          <td>
                            { values.projects.map((values,key) => {
                                return (<p key={key}>{values.reporting_person}</p>)
                            })}
                          </td>
                          <td>{values.department_name}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="box-footer clearfix">
                <div className="row">
                  <div className="col-sm-7">
                    <div style={{margin: "25px 0"}}>
                      Showing 1 to {user_details.length >= 10 ? 10 : user_details.length} of {user_details.length} entries
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <Pagination
                      hideDisabled
                      activePage={this.state.activePage}
                      itemsCountPerPage={10}
                      totalItemsCount={user_details.length}
                      onChange={this.handlePageChange.bind(this)}
                    />
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
    projectDetailsReducer: state.projectDetailsReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectDetails: (user_details) => {
      dispatch(projectDetails(user_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagerProject);
