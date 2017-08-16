import { put, call } from 'redux-saga/effects'
import ArticleActions from '../Redux/ArticleRedux'

export function * getArticle (api, { source, sortBy }) {
  const res = yield call(api.getArticle, source, sortBy)
  if (res.ok) {
    if (res.data.status === 'ok') {
      yield put(ArticleActions.articleSuccess(res.data.articles))
    } else {
      yield put(ArticleActions.articleFailure())
    }
  } else {
    yield put(ArticleActions.articleFailure())
  }
}
