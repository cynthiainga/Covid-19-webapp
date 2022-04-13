import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { continentReducer, statsReducer } from './countries/countries';

const reducer = combineReducers({
  details: statsReducer,
  continent: continentReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
