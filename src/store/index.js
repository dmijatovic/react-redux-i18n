/**
 * REDUX setup
 * v.0.0.1 Oct 2018
 */
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import {
  loaderReducer,
  headerReducer,
  i18nReducer,
  personsReducer,
  userReducer,
} from './reducer';

//APP CUSTOM MIDDLEWARE
import { asyncFetch, actionLogger } from './middleware';

//debugger

const reducers = combineReducers({
  loader: loaderReducer,
  header: headerReducer,
  persons: personsReducer,
  i18n: i18nReducer,
  user: userReducer,
});

const appStore = createStore(
  reducers,
  compose(
    applyMiddleware(
      //NOTE! the middleware order matters
      actionLogger,
      asyncFetch
    )
  )
);

export default appStore;
