// @flow

import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './Styles/CustomSpinnerStyles.js'

class CustomSpinner extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={this.props.size || 'large'} style={this.props.style || styles.spinner} />
      </View>
    )
  }
}

export default CustomSpinner
