import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Header from '../components/Header';
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

export const history = createHistory();

const AppRouter = (props) => {  
    return (
        <Router history={history}>
          <div>
            <Header/>
            <Switch>
              <Route path="/" component={SearchPage} exact={true}/>
              <Route path="/login" component={LoginPage} exact={true}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </Router>
    )
  }
  
export default AppRouter;