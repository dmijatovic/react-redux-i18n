import React, { Component } from 'react';

import { Link, Switch } from 'react-router-dom';
//import Login from '../component/login/Login';
import { UserC1, UserC2 } from '../component/user';
import ProtectedRoute from '../component/auth/ProtectedRoute';

class User extends Component {
  render() {
    let { match } = this.props;
    //debugger;
    return (
      <div>
        <h1>User page</h1>
        <p>
          Check this <Link to={`${match.url}/c1`}>here</Link>
        </p>
        <ProtectedRoute
          path={`${match.url}/c1`}
          exact={true}
          component={UserC1}
        />
        <ProtectedRoute
          path={`${match.url}/c2`}
          exact={true}
          component={UserC2}
        />
      </div>
    );
  }
}

export default User;
