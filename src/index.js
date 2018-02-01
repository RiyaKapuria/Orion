import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import App from './App';
import Session from './components/Session/Session';
import store from './store';


export class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            {console.log('Login Token', Cookies.get('Token'))}
            { (Cookies.get('Token'))
              ?
              (<Route path={'/'} component={App} />)
              :
              (<Route path={'/'} component={Session} />)
            }
          </div>
        </Router>
      </Provider>
    );
  }
}

render(
  <Application />,
  window.document.getElementById('root')
);
