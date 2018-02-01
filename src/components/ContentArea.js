import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { DashBoard } from './DashBoard/DashBoard';
import EmployeeDetails from './EmployeeInfo/EmployeeDetails';
import SingleEmployee from './EmployeeInfo/SingleEmployee';
import { Policies } from './HRManagement/Policies';
import { Announcements } from './HRManagement/Announcements';
import PersonalDetails from './MyPage/PersonalDetails';
import ProfessionalDetails from './MyPage/ProfessionalDetails';
import { ContactDetails } from './MyPage/ContactDetails';
import Skills from './MyPage/Skills';
import { Certificates } from './MyPage/Certificates';
import { Leave } from './MyPage/Leave';
import MyAllocation from './MyPage/MyAllocation';
import Project from './Project/Project';
import AssignProject from './Project/AssignProject';
import { AboutConpany } from './AboutConpany';
import { Error404 } from  './Error/Error404';

class ContentArea extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/Dashboard' />)} />
          <Route path={'/Dashboard'} component={DashBoard} />
          <Route path={'/EmployeeDetails'} component={EmployeeDetails} />
          <Route path={'/SingleEmployee'} component={SingleEmployee} />
          <Route path={'/Policies'}  component={Policies} />
          <Route path={'/Announcements'}  component={Announcements} />
          <Route path={'/PersonalDetails'} component={PersonalDetails} />
          <Route path={'/ProfessionalDetails'} component={ProfessionalDetails} />
          <Route path={'/ContactDetails'} component={ContactDetails} />
          <Route path={'/Skills'} component={Skills} />
          <Route path={'/Certificates'} component={Certificates} />
          <Route path={'/Leave'} component={Leave} />
          <Route path={'/MyAllocation'} component={MyAllocation} />
          <Route path={'/Project'} component={Project} />
          <Route path={'/AssignProject'} component={AssignProject} />
          <Route path={'/AboutConpany'} component={AboutConpany} />
          <Route path={'*'} component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default ContentArea;
