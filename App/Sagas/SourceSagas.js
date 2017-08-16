import { put, call } from 'redux-saga/effects'
import SourceActions from '../Redux/SourceRedux'

export function * getSource (api) {
  const language = 'en'
  const res = yield call(api.getSource, language)
  if (res.ok) {
    if (res.data.status === 'ok') {
      const data = res.data.sources.filter((source) => (source.sortBysAvailable.length > 1))
      yield put(SourceActions.sourceSuccess(data))
    } else {
      yield put(SourceActions.sourceFailure())
    }
  } else {
    yield put(SourceActions.sourceFailure())
  }
}
