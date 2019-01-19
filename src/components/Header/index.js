import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import styles from './styles';

const Header = ({ title, back }) => (
  <View style={styles.container}>
    {back && (
      <TouchableOpacity onPress={back}>
        <Icon name="angle-left" size={16} />
      </TouchableOpacity>
    )}
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default withNavigation(Header);
