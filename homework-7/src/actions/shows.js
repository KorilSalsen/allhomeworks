import { createActions } from 'redux-actions';

export const {
  searchFetchRequest,
  searchFetchReject,
  searchFetchSuccess
} = createActions({
  SHOWS: {
    FETCH: { REQUEST: undefined, REJECT: undefined, SUCCESS: undefined }
  }
});
