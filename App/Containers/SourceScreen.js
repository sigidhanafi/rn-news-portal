import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

// styles
import styles from './Styles/SourceScreenStyles.js'

// redux
import SourceActions from '../Redux/SourceRedux'

// container
import SourceGrid from './SourceGrid'

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
        <SourceGrid />
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
