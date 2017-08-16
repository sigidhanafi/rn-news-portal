import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// styles
import styles from './Styles/SourceScreenStyles.js'

// redux
import SourceActions from '../Redux/SourceRedux'

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

  componentDidMount () {
    this.props.fetchSource()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>News Portal</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  source: state.source
})

const mapDispatchToProps = (dispatch) => ({
  fetchSource: () => dispatch(SourceActions.sourceRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(SourceScreen)
