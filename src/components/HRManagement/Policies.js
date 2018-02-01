import React, { Component } from 'react';

export class Policies extends Component {
  render() {
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">Policies</h3>
        </div>
        <div className="box-body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Work from home 2017</td>
                <td>Policy for wfh</td>
                <td><span className="glyphicon glyphicon-download-alt"></span></td>
              </tr>
              <tr>
                <td>Client location policy</td>
                <td>Guideline for location</td>
                <td><span className="glyphicon glyphicon-download-alt"></span></td>
              </tr>
              <tr>
                <td>Leave policy 2016</td>
                <td>Leave policy</td>
                <td><span className="glyphicon glyphicon-download-alt"></span></td>
              </tr>
              <tr>
                <td>Separation policy 2016</td>
                <td>	Separation policy</td>
                <td><span className="glyphicon glyphicon-download-alt"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box-footer clearfix">
          <ul className="pagination pagination-sm no-margin pull-right">
            <li><a href="#">«</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">»</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
