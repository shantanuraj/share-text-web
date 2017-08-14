/**
 * Texts actions / reducers
 */

import {
  Epic,
} from 'redux-observable';

import ShareText from '../api/ShareText';

type FetchTexts = 'FETCH_TEXTS';
const FETCH_TEXTS: FetchTexts = 'FETCH_TEXTS';
interface FetchTextsAction {
  type: FetchTexts,
  host: string,
  code: string,
}

/**
 * Action creator for fetching texts
 * @param host - Host address of TextShare compliant server
 * @param code - 2FA security code for authentication
 */
export const fetchTexts = (host: string, code: string): FetchTextsAction => ({
  type: FETCH_TEXTS,
  host,
  code,
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
type TextsActions = FetchTextsAction | FetchTextsFulfilledAction;

/**
 * Texts specific state
 */
export interface TextsState {
  loading: boolean;
  texts: ShareText.Text[];
}

/**
 * Fetch texts epic
 */
export const fetchTextsEpic: Epic<TextsActions, TextsState> = action$ =>
  action$.ofType(FETCH_TEXTS)
    .mergeMap((action: FetchTextsAction) =>
      new ShareText(action.host, action.code)
        .getTexts()
        .map(fetchTextsFulfilled)
    );

/**
 * Texts store
 */
export const texts = (state: TextsState = {
  loading: false,
  texts: [],
}, action: TextsActions) => {
  switch (action.type) {
    case FETCH_TEXTS:
      return { ...state, loading: true };
    case FETCH_TEXTS_FULFILLED:
      return { ...state, loading: false, texts: action.texts };
    default:
      return state;
  }
}
