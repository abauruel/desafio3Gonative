import React, { Component } from 'react';

import {
  View, ScrollView, Text, AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native';


import Header from '../../components/Header';
import Form from '../../components/Form';

import RepositoriesItem from '~/pages/Repositories/RepositoriesItems'

import styles from './styles';

import api from '~/services/api';

export default class Issues extends Component {
  state = {
    repositories: [],
    refreshing: false,
    repo: '',
    loading: false,
  };

  async componentWillMount() {
    const repos = await AsyncStorage.getItem('@Desafio3:repositories');
    this.setState({
      repositories: JSON.parse(repos),
      refreshing: false,
    });
  }


  loadingRepository = async () => {
    const { repositories} = this.state
    this.setState({ refreshing: true })
    const repos = await AsyncStorage.getItem('@Desafio3:repositories');
    this.setState({
      repositories: JSON.parse(repos),
      refreshing: false,
    });
    console.tron.log(repositories)
  }

  insertRepos = async () => {
    const { repo, repositories } = this.state;
    const { data } = await api.get(`/repos/${repo}`);
    this.setState({
      repositories: [...repositories, data],
    });
    AsyncStorage.clear();
    await AsyncStorage.setItem('@Desafio3:repositories', JSON.stringify(repositories));
  };

  changeRepo = text => this.setState({ repo: text });

  renderListItem = ({ item }) => (
    <RepositoriesItem repos={item} />
  )


  renderList = () => {
    const { repositories, refreshing } = this.state;
    return (
      <FlatList data={repositories}  keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadingRepository}
        refreshing={refreshing} />
    );
  };

  render() {
    const { repo, loading } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <Form insertRepos={this.insertRepos} name={repo} changeRepo={this.changeRepo} />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
