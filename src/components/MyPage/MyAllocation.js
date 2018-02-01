import React, { Component } from 'react';
import { connect } from 'react-redux';

import { projectDetails } from '../../actions/Project';
import Pagination from 'react-js-pagination';
import PageLoading from '../PageLoading';

class MyAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter_item: null,
      search_item: '',
      activePage: 1,
    };
  }

  componentWillMount() {
    let input = {
      page: this.state.activePage,
      filter: null,
      search: null
    };
    this.props.projectDetails(input);
  }

  //Pagination
  handlePageChange(pageNumber) {
    this.setState ({activePage: pageNumber}, () => {
     this.props.projectDetails ({
       page: this.state.activePage,
       filter: null,
       search: null
     });
    });
    window.scrollTo(0, 0);
  }

  render() {
    let project_details =
    (this.props.projectDetailsReducer && this.props.projectDetailsReducer.project_details) ?
    project_details = this.props.projectDetailsReducer.project_details.users[0].projects : [] ;
    return (
      <div className="row">
        { project_details.length <= 0 ?
          <PageLoading />
          :
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h2 className="box-title" style={{color: "#3c8dbc"}}><b>My Projects Details</b></h2>
              </div>
              <div className="box-body">
                <div className="table-responsive no-padding">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th>Project Code</th>
                        <th>Project Name</th>
                        <th>Reporting Person</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Project Description</th>
                      </tr>
                      { project_details.map((values,key) => {
                        return (
                          <tr key={key}>
                            <td>{values.project_code}</td>
                            <td>{values.name}</td>
                            <td>{values.reporting_person}</td>
                            <td>{values.start_date}</td>
                            <td>{values.end_date}</td>
                            <td>{values.description}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="box-footer clearfix">
                <div className="pull-right">
                  <Pagination
                    hideDisabled
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={project_details.length}
                    onChange={this.handlePageChange.bind(this)}
                  />
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
    projectDetails: (project_details) => {
      dispatch(projectDetails(project_details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAllocation);
