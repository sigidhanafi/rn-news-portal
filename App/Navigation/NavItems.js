import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyles'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../Themes'

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop} style={styles.buttonContainer}>
        <Icon name='angle-left'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Icon name='bars'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  searchButton (callback) {
    return (
      <TouchableOpacity onPress={callback} style={styles.buttonContainer}>
        <Icon name='search'
          size={Metrics.icons.small}
          color={Colors.snow}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    )
  }

}
