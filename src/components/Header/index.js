import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => this.props.navigation.goBack()} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default withNavigation(Header);
