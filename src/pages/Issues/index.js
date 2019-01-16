import React, { Component } from 'react';

import { View } from 'react-native';

import Header from '~/components/Header';

import PropTypes from 'prop-types';
import styles from './styles';

import Filtro from '~/components/Filtro';

export default class Issues extends Component {
  state = {
    repositorio: '',
  };

  componentWillMount() {
    this.loadHeader();
  }

  loadHeader = () => {
    const { navigation } = this.props;

    this.setState({
      repositorio: navigation.getParam('repositorio', 'VAZIO'),
    });
  };

  back = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { repositorio } = this.state;
    return (
      <View style={styles.container}>
        <Header title={repositorio} back={this.back} />
        <Filtro />
      </View>
    );
  }
}
