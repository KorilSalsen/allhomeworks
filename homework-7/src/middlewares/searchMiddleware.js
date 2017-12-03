import { search } from '../api';
import { searchRequest, searchReject, searchSuccess } from '../actions/search';

export default store => next => action => {
  if (action.type === searchRequest.toString()) {
    search(action.payload)
      .then(shows => {
        store.dispatch(searchSuccess(shows));
      })
      .catch(error => {
        store.dispatch(searchReject(error));
      });
  }

  return next(action);
};
