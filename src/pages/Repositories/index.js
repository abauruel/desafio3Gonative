import React, { Component } from 'react';

import {
  View,  AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native';


import Header from '~/components/Header';
import Form from '~/components/Form';
import RepositoriesItem from '~/pages/Repositories/RepositoriesItems'
import styles from './styles'
import api from '~/services/api'

export default class Repositories extends Component {
  static navigationOptions ={
    title: "GitIssues",
    headerTitleStyle:{
      padding: 10,
    },
    headerTitleContainerStyle:{
      justifyContent:'center',
      fontWeight: 'bold',
    }
  }

  state = {
    repositories: [],
    refreshing: false,
    repo: '',
    loading: false,
  };
  async componentWillMount() {
    
    const repos = await AsyncStorage.getItem('@Desafio3:repositories');
    if(repos){
    this.setState({
      repositories: JSON.parse(repos),
      refreshing: false,
    })}

  }


  loadingRepository = async () => {
    const { repositories} = this.state
    this.setState({ refreshing: true })
    const repos = await AsyncStorage.getItem('@Desafio3:repositories');
    this.setState({
      repositories: JSON.parse(repos),
      refreshing: false,
    });

  }

  insertRepos = async () => {
    const { repo, repositories } = this.state;
    const { data } = await api.get(`/repos/${repo}`);
    const varRepositories = {
      id: data.id,
      avatar_url: data.organization.avatar_url,
      login: data.organization.login,
      name: data.name,
      full_name: data.full_name,
    }
    this.setState({
      repositories: [...repositories, varRepositories]
    });
    AsyncStorage.clear();
    const stateRepositories = JSON.stringify(repositories);
    AsyncStorage.setItem('@Desafio3:repositories', stateRepositories);

  };

  changeRepo = text => this.setState({ repo: text });

  renderListItem = ({item}) => (
    <RepositoriesItem repos={item} repoIssue={this.repoIssue}/>
  )

  repoIssue = name => {
    const { navigation } = this.props
    navigation.navigate('Issues',{ repositorio: `${name}`})
  }
  renderList = () => {
    const { repositories, refreshing } = this.state;
    return (
      <FlatList 
        data={repositories}  
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadingRepository}
        refreshing={refreshing} />
    
    );
  };

  render() {
    const { repo, loading } = this.state;
    return (
      <View style={styles.container}>

        <Form insertRepos={this.insertRepos} name={repo} changeRepo={this.changeRepo} />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
