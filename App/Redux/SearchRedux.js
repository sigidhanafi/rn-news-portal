import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchRequest: ['searchTerm'],
  searchSuccess: ['searchTerm'],
  searchFailure: null,
  cancelSearch: null
})

export const SearchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false
})

/* ------------- Reducers ------------- */

export const request = (state) => {
  return state.merge({ searching: true })
}

export const success = (state, { searchTerm }) => {
  return state.merge({ searching: false, searchTerm })
}

export const failure = (state) => {
  return state.merge({ searching: false, searchTerm: '' })
}

export const cancelSearch = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_REQUEST]: request,
  [Types.SEARCH_SUCCESS]: success,
  [Types.SEARCH_FAILURE]: failure,
  [Types.CANCEL_SEARCH]: cancelSearch
})
