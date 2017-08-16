import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// styles
import styles from './Styles/ArticleScreenStyles.js'

class ArticleScreen extends React.Component {
  state: {
    fetching: boolean
  }

  constructor (props) {
    super(props)
    this.state = {
      fetching: false
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Article</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  source: state.source
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
