import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ContinentReducer, StatsReducer } from './countries/countries';

const reducer = combineReducers({
  details: StatsReducer,
  continent: ContinentReducer,

});

export default createStore(reducer, applyMiddleware(thunk, logger));
