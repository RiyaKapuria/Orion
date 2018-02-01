import React, { Component } from 'react';

export class ContactDetails extends Component {
  render() {
    return (
      <div className="col-md-12">
        <h3 className="box-title">Contact Details</h3>
        <div className="box box-widget widget-user">
          <div className="widget-user-header bg-aqua">
            <h3 className="widget-user-username">Riya Kapuria</h3>
            <h5 className="widget-user-desc">Jr. Software Developer</h5>
          </div>
          <div className="widget-user-image">
            <img className="img-circle" src="../dist/img/riya.jpg" alt="User Avatar" />
          </div>
          <div className="box-body">
            <strong>Personal Email</strong>
            <p className="text-muted">riyakapuria.1992@gmail.com</p>
            <hr />
            <strong>Mobile Number</strong>
            <p className="text-muted">9126959772</p>
            <hr />
            <strong>Phone Number</strong>
            <p className="text-muted">9733617823</p>
            <hr />
            <strong>Permanent Address</strong>
            <br /><br />
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Address line 1</th>
                  <th>Address line 2</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                </tr>
                <tr>
                  <td>No.5,M.M Dutta Road</td>
                  <td></td>
                  <td>Habra</td>
                  <td>West Bengal</td>
                  <td>743271</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <strong>Present Address</strong>
            <br /><br />
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Address line 1</th>
                  <th>Address line 2</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                </tr>
                <tr>
                  <td>No.5,M.M Dutta Road</td>
                  <td></td>
                  <td>Habra</td>
                  <td>West Bengal</td>
                  <td>743271</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <strong>Emergency Contact</strong>
            <br /><br />
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Relationship</th>
                  <th>Mobile</th>
                  <th>LandLine</th>
                  <th>Secondary Contact</th>
                </tr>
                <tr>
                  <td>Satya Saha</td>
                  <td>uncle</td>
                  <td>9830863912</td>
                  <td>9733617823</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
