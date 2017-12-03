import { handleActions } from 'redux-actions';

import { showRequest, showReject, showSuccess } from '../actions/shows';

const initialState = {
  isFetching: false,
  isFetched: false,
  show: null,
  error: null
};

export default handleActions(
  {
    [showRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    [showReject]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: false,
      error: action.payload,
      show: null
    }),
    [showSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      show: action.payload,
      error: null
    })
  },
  initialState
);
