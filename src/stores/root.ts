/**
 * Redux store root entities
 */

import {
  combineEpics,
} from 'redux-observable';

import {
  combineReducers,
} from 'redux';

import {
  TextsState,
  texts,
  fetchTextsEpic,
} from './texts';

/**
 * Combined application state interface
 */
export interface State {
  texts: TextsState;
};

export const getDefaultState = (): State => ({
  texts: {
    loading: false,
    texts: [],
  }
});

export const rootEpic = combineEpics(
  fetchTextsEpic,
);

export const rootReducer = combineReducers<State>({
  texts,
});
