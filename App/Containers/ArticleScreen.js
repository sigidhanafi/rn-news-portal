import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

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
        <ScrollableTabView
          style={{}}
          initialPage={0}
          renderTabBar={() => <DefaultTabBar />}
        >
          <ScrollView tabLabel='Latest'>
            <Text>
              Latest
            </Text>
          </ScrollView>
          <ScrollView tabLabel='Top'>
            <Text>
              Top
            </Text>
          </ScrollView>
          <ScrollView tabLabel='Popular'>
            <Text>
              Popular
            </Text>
          </ScrollView>
        </ScrollableTabView>
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
