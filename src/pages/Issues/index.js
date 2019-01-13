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
    repo: '',
  };

  componentDidMount() {}

  insertRepos = async () => {
    const { repo, repositories } = this.state;

    const { data } = await api.get(`/repos/${repo}`);

    this.setState({
      repositories: [...repositories, data],
    });

    console.tron.log(repositories);
  };

  changeRepo = text => this.setState({ repo: text });

  render() {
    const { repo, repositories } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <Form insertRepos={this.insertRepos} name={repo} changeRepo={this.changeRepo} />
        <ScrollView>
          {repositories.map(repos => (
            <Text>{repos.name}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}
