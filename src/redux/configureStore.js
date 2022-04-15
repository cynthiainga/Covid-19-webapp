import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ContinentReducer, StatsReducer } from './countries';

const reducers = combineReducers({
  details: StatsReducer,
  continent: ContinentReducer,
});

export default createStore(reducers, applyMiddleware(thunk, logger));
