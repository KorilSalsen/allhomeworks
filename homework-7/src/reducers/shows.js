import { handleActions } from 'redux-actions';

import {
  searchFetchRequest,
  searchFetchReject,
  searchFetchSuccess
} from '../actions/shows';

const initialState = {
  show: null
};

export default handleActions(
  {
    [searchFetchRequest]: (state, action) => state,
    [searchFetchReject]: (state, action) => state,
    [searchFetchSuccess]: (state, action) => state
  },
  initialState
);
