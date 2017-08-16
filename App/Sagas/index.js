import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */
import { SourceTypes } from '../Redux/SourceRedux'
import { ArticleTypes } from '../Redux/ArticleRedux'

/* ------------- Sagas ------------- */
import { getSource } from './SourceSagas'
import { getArticle } from './ArticleSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(SourceTypes.SOURCE_REQUEST, getSource, api),
    takeLatest(ArticleTypes.ARTICLE_REQUEST, getArticle, api)
  ]
}
