import React, { PropTypes } from 'react'
import { View, Text, LayoutAnimation, TouchableOpacity } from 'react-native'
import NavItems from './NavItems'
import styles from './Styles/CustomNavBarStyles'
import SearchBar from '../Components/SearchBar'
import { connect } from 'react-redux'
import { Metrics } from '../Themes'
import SearchActions from '../Redux/SearchRedux'

class CustomNavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSearchBar: false,
      searchTerm: ''
    }
  }

  showSearchBar = () => {
    this.setState({showSearchBar: true})
  }

  cancelSearch = () => {
    this.setState({showSearchBar: false, searchTerm: ''})
    this.props.cancelSearch()
  }

  changeText = (searchTerm) => {
    this.setState({ searchTerm })
    this.props.performSearch(searchTerm)
  }

  onSearch = (searchTerm) => {
    this.props.performSearch(searchTerm)
  }

  renderMiddle () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if (this.state.showSearchBar) {
      return <SearchBar onSearch={this.props.performSearch} onChangeText={this.changeText} searchTerm={this.state.searchTerm} onCancel={this.cancelSearch} />
    } else {
      return (
        <View style={styles.middleContainer}>
          <Text style={styles.title}> {this.props.title} </Text>
        </View>
      )
    }
  }

  renderRightButtons () {
    if (this.state.showSearchBar) {
      return <View style={{width: Metrics.icons.medium}} />
    } else if (!this.props.showSearchButton) {
      return (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonContainer} />
        </View>
      )
    } else {
      return (
        <View style={styles.rightButtons}>
          {NavItems.searchButton(this.showSearchBar)}
        </View>
      )
    }
  }

  renderLeftButtons () {
    if (this.state.showSearchBar) {
      return null
    } else if (!this.props.showBackButton) {
      return (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonContainer} />
        </View>
      )
    } else {
      return (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={this.handleBackPress} style={styles.buttonContainer}>
            {NavItems.backButton()}
          </TouchableOpacity>
        </View>
      )
    }
  }

  render () {
    let state = this.props.navigationState
    let selected = state.children[state.index]
    while (selected.hasOwnProperty('children')) {
      state = selected
      selected = selected.children[selected.index]
    }

    const containerStyle = [
      styles.container,
      this.props.navigationBarStyle,
      state.navigationBarStyle,
      selected.navigationBarStyle
    ]

    return (
      <View style={containerStyle}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

CustomNavBar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    performSearch: (searchTerm) => dispatch(SearchActions.searchRequest(searchTerm)),
    cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)
