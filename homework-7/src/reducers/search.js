import { handleActions } from 'redux-actions';

import {
  searchFetchRequest,
  searchFetchReject,
  searchFetchSuccess
} from '../actions/search';

const initialState = {
  isFetching: false,
  isFedched: false,
  result: []
};

export default handleActions(
  {
    [searchFetchRequest]: (state, action) => {
      return { ...state, isFetching: true, isFedched: false };
    },
    [searchFetchReject]: (state, action) => {
      return { ...state, isFetching: false, isFedched: false };
    },
    [searchFetchSuccess]: (state, action) => {
      return {
        ...state,
        isFetching: false,
        isFedched: true,
        result: action.payload
      };
    }
  },
  initialState
);
