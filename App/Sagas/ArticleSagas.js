import { put, call, select } from 'redux-saga/effects'
import ArticleActions from '../Redux/ArticleRedux'

export const getState = (state) => state.article

export function * getArticle (api, { source, sortBy }) {
  const res = yield call(api.getArticle, source, sortBy)
  if (res.ok) {
    if (res.data.status === 'ok') {
      const state = yield select(getState)
      const { sortBy } = res.data
      const dataSortBy = {}
      dataSortBy[sortBy] = res.data.articles
      const data = { ...state.data, ...dataSortBy }
      yield put(ArticleActions.articleSuccess(data))
    } else {
      yield put(ArticleActions.articleFailure())
    }
  } else {
    yield put(ArticleActions.articleFailure())
  }
}
