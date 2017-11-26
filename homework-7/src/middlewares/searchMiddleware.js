import { search } from '../api';
import {
  searchFetchRequest,
  searchFetchReject,
  searchFetchSuccess
} from '../actions/search';

export default store => next => action => {
  if (action.type === searchFetchRequest.toString()) {
    search(action.payload)
      .then(shows => {
        store.dispatch(searchFetchSuccess(shows));
      })
      .catch(error => {
        store.dispatch(searchFetchReject(error));
      });
  }

  return next(action);
};
