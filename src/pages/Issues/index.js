import React, { Component } from 'react';

import { View } from 'react-native';

import Header from '../../components/Header';
import Form from '../../components/Form';

import styles from './styles';

export default class Issues extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Form />
      </View>
    );
  }
}
