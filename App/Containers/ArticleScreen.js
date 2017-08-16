import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

// styles
import styles from './Styles/ArticleScreenStyles.js'

// redux
import ArticleActions from '../Redux/ArticleRedux'

class ArticleScreen extends React.Component {
  state: {
    fetching: boolean,
    sourceId: string,
    sortBy: string
  }

  constructor (props) {
    super(props)
    this.state = {
      fetching: false,
      sourceId: props.sourceId,
      sortBy: props.sortBy
    }
  }

  componentWillReceiveProps (newProps) {
    const { sourceId, sortBy } = newProps
    this.setState({
      sourceId,
      sortBy
    })
  }

  componentDidMount () {
    const { sourceId, sortBy } = this.props
    this.props.fetchArticle(sourceId, sortBy)
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
  fetchArticle: (source, sortBy) => dispatch(ArticleActions.articleRequest(source, sortBy))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
