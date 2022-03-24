import React, { Suspense } from 'react';
import { Switch, withRouter, Redirect, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ResourcesRoutes from './routes/ResourcesRoutes';
import MasterRoutes from './routes/MasterRoutes';
import { ErrorBoundary } from 'react-error-boundary';

import Login from '../screens/Login';
import NotFound from '../components/Common/NotFound';
import Resources from '../screens/Resources';
import Masters from '../screens/Masters';
import Proposals from '../screens/Proposals';
import Dashboard from '../screens/Dashboard';
import Queries from '../screens/Queries';
import QueriesForm from '../components/Queries/QueriesForm';
import QueryPage from '../components/Queries/QueryPage';
import log from '../utils/logger';
import {
  HOME,
  LOGIN,
  LOGOUT,
  CALLBACK_AFTER_LOGIN,
  NOT_FOUND,
  DASHBOARD,
  PROPOSALS,
  RESOURCE_PRODUCTS,
  RESOURCE_PRODUCT_BY_TYPE,
  MASTER_PRODUCT_BY_TYPE,
  RESOURCE_ACTIVITIES,
  RESOURCE_SUPPLIERS,
  QUERIES,
  QUERY_BY_ID,
  QUERY_FORM_BY_STATE,
} from '../constants/urls';

const routes = [...ResourcesRoutes, ...MasterRoutes];

function AppRouter(props) {
  const routeComponents = routes.map(({ path, component }, key) => {
    return (
      <PrivateRoute
        user={props.user}
        path={path}
        component={component}
        key={key}
      />
    );
  });

  const resetErrorBoundaryState = () => {
    window.location.reload();
  };

  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    log('info', error.message);
    return (
      <div className="flex main-warning-wrapper items-center justify-center">
        <div className="alert-global" role="alert">
          <img className="error-msg" src="/img/err-msg.png" />
          <div className="warning-msg">Aaaah! Something went wrong :(</div>
          <div className="warning-desc">
            Brace yourself till we get the error fixed.
          </div>
          <div className="warning-footer">
            You may also Refresh the page of click on Try Again below
          </div>
          <button
            className="try-again-global cursor-pointer"
            onClick={() => resetErrorBoundaryState()}
          >
            Try again
          </button>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary
      key="home"
      FallbackComponent={ErrorFallback}
      onReset={() => {
        log('info', '');
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={HOME}>
            <Redirect to={RESOURCE_SUPPLIERS} />
          </Route>
          <Route path={RESOURCE_PRODUCT_BY_TYPE} component={Resources} />
          <Route path={MASTER_PRODUCT_BY_TYPE} component={Masters} />
          <Route path={RESOURCE_PRODUCTS} component={Resources} />
          <Route path={DASHBOARD} component={Dashboard} />
          <Route path={PROPOSALS} component={Proposals} />
          <Route exact path={QUERY_FORM_BY_STATE} component={QueriesForm} />
          <Route exact path={QUERY_BY_ID} component={QueryPage} />
          <Route exact path={QUERIES} component={Queries} />
          <Route path={CALLBACK_AFTER_LOGIN}>
            <Redirect to={HOME} />
          </Route>
          <Route path={LOGOUT}>
            <Redirect to={LOGIN} />
          </Route>
          <Route path={NOT_FOUND} component={NotFound} />
          <PublicRoute user={props.user} path={LOGIN} component={Login} />
          {routeComponents}
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

export default withRouter(AppRouter);
