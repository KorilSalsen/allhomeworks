import { createActions } from 'redux-actions';

export const { showRequest, showReject, showSuccess } = createActions({
  SHOW_REQUEST: undefined,
  SHOW_REJECT: undefined,
  SHOW_SUCCESS: undefined
});
