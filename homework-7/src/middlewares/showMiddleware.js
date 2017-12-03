import { show } from '../api';
import { showReject, showRequest, showSuccess } from '../actions/shows';

export default store => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(show => {
        store.dispatch(showSuccess(show));
      })
      .catch(error => {
        store.dispatch(showReject(error));
      });
  }

  return next(action);
};
