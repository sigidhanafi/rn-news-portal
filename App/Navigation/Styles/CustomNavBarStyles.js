import { Colors, Metrics, Fonts } from '../../Themes/'

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.header,
    flexDirection: 'row',
    height: Metrics.navBarHeight
  },
  leftContainer: {
    flex: 0.6
  },
  rightContainer: {
    flex: 0.6
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6
  },
  title: {
    color: Colors.snow,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: '600',
    lineHeight: 22
  },
  buttonContainer: {
    height: Metrics.navBarHeight,
    justifyContent: 'center'
  },
  buttonIcon: {
    marginRight: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  },
  leftLogo: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
    height: Metrics.icons.large
  }
}
