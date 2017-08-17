import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
// import styles from './Styles/NavigationContainerStyles'
import CustomNavBar from './CustomNavBar'

// screens identified by the router
import SourceScreen from '../Containers/SourceScreen'
import ArticleListScreen from '../Containers/ArticleListScreen'
import ArticleScreen from '../Containers/ArticleScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene initial key='sourceScreen' component={SourceScreen} title='News Portal' navBar={CustomNavBar} />
          <Scene key='articleListScreen' component={ArticleListScreen} title='Source' navBar={CustomNavBar} showBackButton showSearchButton />
          <Scene key='articleScreen' component={ArticleScreen} title='Article' navBar={CustomNavBar} showBackButton />
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
