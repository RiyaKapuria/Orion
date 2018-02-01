import React from 'react';
import ProfileTab from './ProfileTab';
import ChangePassword from './ChangePassword';

function NavBar() {
  return (
    <nav className="navbar navbar-static-top">
      <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <ProfileTab />
          <ChangePassword />
          <li>
            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
