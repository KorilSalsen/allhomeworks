import { handleActions } from 'redux-actions';

import { searchRequest, searchReject, searchSuccess } from '../actions/search';

const initialState = {
  isFetching: false,
  isFetched: false,
  result: [],
  error: null
};

export default handleActions(
  {
    [searchRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    [searchReject]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: false,
      error: action.error,
      result: []
    }),
    [searchSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      result: action.payload,
      error: null
    })
  },
  initialState
);
