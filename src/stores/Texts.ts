/**
 * Texts actions / reducers
 */

import {
  Epic,
} from 'redux-observable';

import {
  State,
} from '../stores/root';

import {
  toThreads,
} from '../utils';

import ShareText from '../api/ShareText';

type FetchTexts = 'FETCH_TEXTS';
const FETCH_TEXTS: FetchTexts = 'FETCH_TEXTS';
interface FetchTextsAction {
  type: FetchTexts;
}

/**
 * Action creator for fetching texts
 */
export const fetchTexts = (): FetchTextsAction => ({
  type: FETCH_TEXTS,
});

type FetchTextsFulfilled = 'FETCH_TEXTS_FULFILLED';
const FETCH_TEXTS_FULFILLED: FetchTextsFulfilled = 'FETCH_TEXTS_FULFILLED';
interface FetchTextsFulfilledAction {
  type: FetchTextsFulfilled,
  texts: ShareText.Text[],
}

/**
 * Action creator for storing texts retrieved from server
 * @param texts - Texts retrieved from API
 */
const fetchTextsFulfilled = (texts: ShareText.Text[]): FetchTextsFulfilledAction => ({
  type: FETCH_TEXTS_FULFILLED,
  texts,
});

/**
 * Texts reducer actions
 */
export type TextsActions =
  FetchTextsAction |
  FetchTextsFulfilledAction;

/**
 * Texts specific state
 */
export interface TextsState {
  loading: boolean;
  texts: ShareText.Text[];
  threads: ShareText.TextThread[];
}

/**
 * Fetch texts epic
 */
export const fetchTextsEpic: Epic<TextsActions, State> = (action$, store) =>
  action$.ofType(FETCH_TEXTS)
    .mergeMap(() => {
      const {
        host,
        code,
      } = store.getState().auth;
      return new ShareText(host, code)
      .getTexts()
      .map(fetchTextsFulfilled)
    });

/**
 * Texts reducer
 */
export const texts = (state: TextsState = {
  loading: false,
  texts: [],
  threads: [],
}, action: TextsActions): TextsState => {
  switch (action.type) {
    case FETCH_TEXTS:
      return { ...state, loading: true };
    case FETCH_TEXTS_FULFILLED:
      return { ...state, loading: false, texts: action.texts, threads: toThreads(action.texts) };
    default:
      return state;
  }
}
