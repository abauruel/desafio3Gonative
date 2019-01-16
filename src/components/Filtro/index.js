import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Filtro = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text>Abertas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text>Fechadas</Text>
    </TouchableOpacity>
  </View>
);

export default Filtro;
