import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Signin from './Signin';
import { ForgotPassword } from './ForgotPassword';
import { Error404 } from '../Error/Error404';

function Session() {
  return (
    <div style={{background:'#d2d6de'}}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/Signin" />)} />
        <Route path={'/Signin'} component={Signin} />
        <Route path={'/ForgotPassword'} component={ForgotPassword} />
        <Route path={'*'} component={Error404} />
      </Switch>
    </div>
  )
}

export default Session;
