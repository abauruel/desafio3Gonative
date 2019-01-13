import './config/ReactotronConfig';
import React, { Component } from 'react';

import createNavigator from './routes';

// import styles from './styles';

export default class App extends Component {
  render() {
    const Routes = createNavigator;
    return <Routes />;
  }
}
