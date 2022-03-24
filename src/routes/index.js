import React from 'react';
import {
  // BrowserRouter as Router,
  BrowserRouter,
} from 'react-router-dom';
import PublicRouter from './PublicRouter';
import AppRouter from './AppRouter';

class Router extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // this.props.refreshAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    );
  }
}

export default Router;
