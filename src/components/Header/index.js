import React from 'react';

import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>GitIssues</Text>
  </View>
);

export default withNavigation(Header);
