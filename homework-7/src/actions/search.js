import { createActions } from 'redux-actions';

export const { searchRequest, searchReject, searchSuccess } = createActions({
  SEARCH_REQUEST: undefined,
  SEARCH_REJECT: undefined,
  SEARCH_SUCCESS: undefined
});
