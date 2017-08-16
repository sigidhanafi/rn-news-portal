import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    search: require('./SearchRedux').reducer,
    source: require('./SourceRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
