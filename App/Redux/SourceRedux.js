import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sourceRequest: null,
  sourceSuccess: ['data'],
  sourceFailure: ['error']
})

export const SourceTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to request
export const request = (state) => state.merge({ fetching: true })

// we've successfully
export const success = (state, { data }) =>
  state.merge({ fetching: false, error: null, data })

// we've had a problem
export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SOURCE_REQUEST]: request,
  [Types.SOURCE_SUCCESS]: success,
  [Types.SOURCE_FAILURE]: failure
})
