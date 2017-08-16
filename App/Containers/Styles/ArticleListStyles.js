import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    padding: Metrics.baseMargin
  },
  rowBody: {
    flex: 1,
    flexDirection: 'row'
  },
  rowImage: {
    flex: 3,
    width: null,
    height: null,
    marginVertical: Metrics.smallMargin
  },
  rowtextContainer: {
    flex: 7,
    marginVertical: Metrics.smallMargin,
    marginLeft: Metrics.baseMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.black
  },
  label: {
    color: Colors.black
  },
  listContent: {
  }
})
