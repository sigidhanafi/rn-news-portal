import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center'
}

export default StyleSheet.create({
  buttonContainer: {
    height: Metrics.navBarHeight,
    justifyContent: 'center'
  },
  buttonIcon: {
    ...navButton,
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  }
})
