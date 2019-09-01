import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.

export default withAuth(
  ({path, component, exact, isAuthorized}) => ( 
    isAuthorized ? <Route path={path} component={component} exact={exact} /> : <Redirect to="/login" />
  )
);
