import React from 'react'
import { View, Text } from 'react-native'

// styles
import styles from './Styles/SourceScreenStyles.js'

class SourceScreen extends React.Component {
  state: {
    fetching: boolean
  }

  constructor (props) {
    super(props)
    this.state = {
      fetching: false
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>News Portal</Text>
      </View>
    )
  }
}

export default SourceScreen
