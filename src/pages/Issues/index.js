import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';

import Header from '../../components/Header';
import Form from '../../components/Form';

import styles from './styles';

import api from '~/services/api';

export default class Issues extends Component {
  state = {
    repositories: [],
    refreshed: false,
  };

  componentDidMount() {}

  insertRepos = async (repo) => {
    console.tron.log(repo);
    const { data } = await api.get(`/repos/${repo}`);
    this.setState({
      respositories: [...this.state.repositories, ...data],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Form insertRepos={this.insertRepos} />
        <ScrollView />
      </View>
    );
  }
}
