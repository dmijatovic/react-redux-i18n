import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../login/Login';

import { logGroup } from '../../utils';

const ProtectedRoute = ({ component: Component, ...props }) => {
  debugger;

  logGroup({
    title: 'ProtectedRoute',
    ...props,
  });

  return (
    <Route
      {...props}
      render={params => {
        debugger;
        if (params.login) {
          return <Component {...params} />;
        } else {
          return <LoginPage {...params} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
