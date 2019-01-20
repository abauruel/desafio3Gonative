import React from 'react';

import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const RepositoriesItems = ({ repos, repoIssue }) => {
  console.tron.log('repos', repos);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: repos.avatar_url }} />
      <View style={styles.names}>
        <Text style={styles.name}>{repos.name}</Text>
        <Text style={styles.login}>{repos.login ? repos.login : repos.full_name}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => repoIssue(repos.full_name)}>
        <Icon name="angle-right" size={16} style={styles.seta} />
      </TouchableOpacity>
    </View>
  );
};
RepositoriesItems.propTypes = {
  repos: PropTypes.shape({
    name: PropTypes.string,
    organization: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
  repoIssue: PropTypes.func.isRequired,
};

export default RepositoriesItems;
