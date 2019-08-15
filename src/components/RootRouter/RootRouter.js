import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider, withAuth } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

// Мы оборачиваем наши роуты в несколько провайдеров
// DataProvider - предоставляет обьект data с имейлами.
// AuthProvider - предоставляет метод авторизации authorize
//                и текущий статус isAuthorized
// BrowserRouter - провайдер react-router-dom.

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={withAuth(props => <PrivateRoute {...props} />)} />
          <Route path="/login" component={withAuth(props => <LoginForm {...props} />)} />
          <PrivateRoute path="/app" component={withAuth(props => <AppRouter {...props} />)} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);
