import { createActions } from 'redux-actions';

export const {
  search: {
    fetch: {
      request: searchFetchRequest,
      reject: searchFetchReject,
      success: searchFetchSuccess
    }
  }
} = createActions({
  SEARCH: {
    FETCH: { REQUEST: undefined, REJECT: undefined, SUCCESS: undefined }
  }
});
