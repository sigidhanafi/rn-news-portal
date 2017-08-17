import { put, call, select } from 'redux-saga/effects'
import ArticleActions from '../Redux/ArticleRedux'

export const getArticleState = (state) => state.article
export const getSearchState = (state) => state.search

export function * getArticle (api, { source, sortBy }) {
  const res = yield call(api.getArticle, source, sortBy)
  if (res.ok) {
    if (res.data.status === 'ok') {
      const article = yield select(getArticleState)
      const search = yield select(getSearchState)
      const {searchTerm} = search
      const { sortBy } = res.data
      const dataSortBy = {}
      if (searchTerm) {
        dataSortBy[sortBy] = res.data.articles.filter((article) => (article.title.toLowerCase().includes(searchTerm.toLowerCase())))
      } else {
        dataSortBy[sortBy] = res.data.articles
      }
      const data = { ...article.data, ...dataSortBy }
      yield put(ArticleActions.articleSuccess(data))
    } else {
      yield put(ArticleActions.articleFailure())
    }
  } else {
    yield put(ArticleActions.articleFailure())
  }
}
