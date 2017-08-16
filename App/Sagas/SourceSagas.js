import { put, call } from 'redux-saga/effects'
import SourceActions from '../Redux/SourceRedux'

export function * getSource (api) {
  const language = 'en'
  const res = yield call(api.getSource, language)
  if (res.ok) {
    if (res.data.status === 'ok') {
      yield put(SourceActions.sourceSuccess(res.data.sources))
    } else {
      yield put(SourceActions.sourceFailure())
    }
  } else {
    yield put(SourceActions.sourceFailure())
  }
}
