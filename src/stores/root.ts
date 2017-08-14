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
  AuthActions,
  AuthState,
  auth,
  fetchAuthEpic,
} from './auth';

import {
  TextsActions,
  TextsState,
  texts,
  fetchTextsEpic,
} from './texts';

/**
 * Combined application actions interface
 */
type Actions =
  AuthActions |
  TextsActions;

/**
 * Combined application state interface
 */
export interface State {
  auth: AuthState;
  texts: TextsState;
};

export const getDefaultState = (): State => ({
  auth: {
    authorized: false,
    code: '',
    host: '',
  },
  texts: {
    loading: false,
    texts: [],
  }
});

export const rootEpic = combineEpics<Actions, State>(
  fetchAuthEpic,
  fetchTextsEpic,
);

export const rootReducer = combineReducers<State>({
  auth,
  texts,
});
