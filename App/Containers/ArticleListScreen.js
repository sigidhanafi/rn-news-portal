import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

// styles
import styles from './Styles/ArticleScreenStyles.js'

// redux
import ArticleActions from '../Redux/ArticleRedux'

// container
import ArticleList from './ArticleList'

class ArticleScreen extends React.Component {
  state: {
    fetching: boolean,
    sourceId: string,
    sortAvailable: any
  }

  constructor (props) {
    super(props)
    this.state = {
      fetching: false,
      sourceId: props.sourceId,
      sortAvailable: props.sortAvailable
    }
  }

  componentWillReceiveProps (newProps) {
    const { sourceId, sortAvailable } = newProps
    this.setState({
      sourceId,
      sortAvailable
    })
  }

  componentDidMount () {
    const { sourceId, sortAvailable } = this.props
    const sortBy = sortAvailable && Array.isArray(sortAvailable) && sortAvailable.length > 0 ? sortAvailable[0] : null
    if (sourceId && sortBy) {
      this.props.fetchArticle(sourceId, sortBy)
    }
  }

  renderTabbarContent = (sortBy) => {
    const {sourceId} = this.state
    return (
      <View tabLabel={sortBy} key={sortBy} sortBy={sortBy} style={{ flex: 1 }}>
        <ArticleList sortBy={sortBy} sourceId={sourceId} />
      </View>
    )
  }

  render () {
    const { sortAvailable, sourceId } = this.state
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={{ flex: 1 }}
          initialPage={0}
          renderTabBar={() => <DefaultTabBar />}
          onChangeTab={(event) => {
            const {sortBy} = event.ref.props
            this.props.fetchArticle(sourceId, sortBy)
          }}
          locked
        >
          { sortAvailable && Array.isArray(sortAvailable) && sortAvailable.length > 0
            ? sortAvailable.map((sortBy) => this.renderTabbarContent(sortBy))
            : null
          }
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
