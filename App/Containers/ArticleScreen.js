import React from 'react'
import { View, WebView } from 'react-native'

// styles
import styles from './Styles/ArticleScreenStyles.js'

class ArticleScreen extends React.Component {
  state: {
    fetching: boolean,
    url: string
  }

  constructor (props) {
    super(props)
    this.state = {
      fetching: false,
      url: props.url
    }
  }

  componentWillReceiveProps (newProps) {
    const { url } = newProps
    this.setState({ url })
  }

  componentDidMount () {
  }

  render () {
    const { url } = this.state
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: url}}
          javaScriptEnabled={false}
          startInLoadingState
        />
      </View>
    )
  }
}

export default ArticleScreen
