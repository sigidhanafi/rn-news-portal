import React from 'react'
import { View, Text, ListView, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ArticleListStyles'

class ArticleList extends React.Component {

  state: {
    fetching: boolean,
    sortBy: string,
    article: any,
    dataSource: any
  }

  constructor (props) {
    super(props)
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      fetching: false,
      sortBy: props.sortBy,
      article: props.article.data,
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps (newProps) {
    const { article, sortBy } = newProps
    const { fetching } = article
    if (fetching !== this.state.fetching) {
      this.setState({
        fetching,
        sortBy,
        article: article.data,
        dataSource: (article.data && article.data[sortBy] && Array.isArray(article.data[sortBy])) ? this.state.dataSource.cloneWithRows(article.data[sortBy]) : this.state.dataSource.cloneWithRows([])
      })
    }
  }

  renderRow = (rowData) => {
    const author = rowData.author || '-'
    return (
      <TouchableOpacity style={styles.row} onPress={() => Actions.articleScreen({ title: 'Author: ' + author, url: rowData.url })}>
        <View style={styles.rowBody}>
          <Image
            source={{ uri: rowData.urlToImage }}
            style={styles.rowImage}
          />
          <View style={styles.rowtextContainer}>
            <Text style={styles.boldLabel}>{rowData.title}</Text>
            <Text style={styles.label}>{rowData.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  article: state.article
})

export default connect(mapStateToProps)(ArticleList)
