import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Form = ({ insertRepos, repo, changeRepo }) => (
  <View style={styles.container}>
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar novo repositorio"
        value={repo}
        onChangeText={changeRepo}
      />
      <TouchableOpacity style={styles.button} onPress={insertRepos}>
        <Icon name="plus" size={20} style={styles.icon} />
      </TouchableOpacity>
    </View>
    <View style={styles.line} />
  </View>
);

export default withNavigation(Form);
