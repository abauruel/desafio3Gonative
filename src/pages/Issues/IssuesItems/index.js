import React from 'react';

import {
  View, Image, Text, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssuesItems = ({ issue }) => (
  <View style={styles.container}>
    <Image style={styles.img} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.names}>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Text>
      <Text style={styles.login}>{issue.user.login}</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`${issue.html_url}`)}>
      <Icon name="angle-right" size={16} style={styles.seta} />
    </TouchableOpacity>
  </View>
);

export default IssuesItems;
