import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Filtro = ({ loadOpenIssues, loadClosedIssues, loadAllIssues }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={loadAllIssues}>
      <Text>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={loadOpenIssues}>
      <Text>Abertas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={loadClosedIssues}>
      <Text>Fechadas</Text>
    </TouchableOpacity>
  </View>
);

export default Filtro;
