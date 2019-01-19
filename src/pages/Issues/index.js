import React, { Component } from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import Header from '~/components/Header';

import PropTypes from 'prop-types';
import styles from './styles';

import Filtro from '~/components/Filtro';
import IssuesItems from '~/pages/Issues/IssuesItems'

import api from '~/services/api'

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) =>{
    return {
      title: `${navigation.getParam('repositorio', 'VAZIO')}`,
      HeaderTitleStyle:{
        padding: 10,
      },
      headerTitleContainerStyle:{
        justifyContent:'center',
        fontWeight: 'bold',
      }
    }
  };

  state = {
    repositorio: '',
    issues: [],
    loading: false,
    refheshing: false,
    filtro: ""
  };
  componentDidMount(){
    this.setState({ loading: true})
    this.loadAllIssues()
  }

  loadOpenIssues = async()=>{
    const {navigation} = this.props
    const repo = navigation.getParam('repositorio',' ')
    const { data } = await api.get(`/repos/${repo}/issues?state=open`)
    this.setState({
      issues: [...data],
    })
    this.setState({
      loading: false
    })
  }
  loadClosedIssues = async()=>{
    const {navigation} = this.props
    const repo = navigation.getParam('repositorio',' ')
    const { data } = await api.get(`/repos/${repo}/issues?state=closed`)
    this.setState({
      issues: [...data],
    })
    this.setState({
      loading: false
    })
  }
  loadAllIssues = async ()=>{
    const {navigation} = this.props
    const repo = navigation.getParam('repositorio',' ')
    const { data } = await api.get(`/repos/${repo}/issues?state=all`)
    this.setState({
      issues: [...data],
    })
    this.setState({
      loading: false
    })
  }

  renderList = () => {
    const { issues, refheshing } = this.state

    return(
    <FlatList
    data={issues}
    keyExtractor={item => String(item.id)}
    renderItem={this.renderItems}
    onRefresh={this.loadAllIssues}
    refreshing={refheshing}

    />
    )
  }
  renderItems = ({item}) =>{
    
    return(
    <IssuesItems  
      issue={item} 
     />
    )
  }
  render() {
    const { repositorio, loading } = this.state;
    return (
      <View style={styles.container}>
        <Filtro  
          loadOpenIssues={this.loadOpenIssues} 
          loadClosedIssues={this.loadClosedIssues} 
          loadAllIssues={this.loadAllIssues} />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
