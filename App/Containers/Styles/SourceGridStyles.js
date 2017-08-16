import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    width: (Metrics.screenWidth - (2 * Metrics.baseMargin)) / 2,
    height: (Metrics.screenWidth - (3 * Metrics.baseMargin)) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    marginBottom: Metrics.baseMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  }
})
