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
  authFulfilledEpic,
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
export type Actions =
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
  authFulfilledEpic,
  fetchTextsEpic,
);

export const rootReducer = combineReducers<State>({
  auth,
  texts,
});
