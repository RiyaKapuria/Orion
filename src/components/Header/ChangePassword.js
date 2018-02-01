import React from 'react';

function ChangePassword() {
  return (
    <li className="dropdown user-menu">
      <a href="/" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-edit"></i>
      </a>
      <div className="dropdown-menu box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title"><b>Change Password</b></h3>
        </div>
        <div className="form-horizontal">
          <div className="box-body">
            <input type="text" className="form-control" placeholder="Current Password" /><br />
            <input type="text" className="form-control" placeholder="New Password" /><br />
            <input type="text" className="form-control" placeholder="Repeat New Password" /><br />
          </div>
          <div className="box-footer">
            <button type="submit" className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-info pull-right">Change Password</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ChangePassword;
