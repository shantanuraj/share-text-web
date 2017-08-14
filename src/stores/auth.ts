/**
 * Auth actions / reducers
 */

import {
  Epic,
} from 'redux-observable';

import {
  State,
} from '../stores/root';

import ShareText from '../api/ShareText';

type UpdateHost = 'UPDATE_HOST';
const UPDATE_HOST: UpdateHost = 'UPDATE_HOST';
interface UpdateHostAction {
  type: UpdateHost;
  host: string;
}

/**
 * Action creator for updating host
 * @param host - User entered host value
 */
export const updateHost = (host: string): UpdateHostAction => ({
  type: UPDATE_HOST,
  host,
});

type UpdateCode = 'UPDATE_CODE';
const UPDATE_CODE: UpdateCode = 'UPDATE_CODE';
interface UpdateCodeAction {
  type: UpdateCode;
  code: string;
}

/**
 * Action creator for updating code
 * @param code - User entered code value
 */
export const updateCode = (code: string): UpdateCodeAction => ({
  type: UPDATE_CODE,
  code,
});

type FetchAuthFulfilled = 'FETCH_AUTH_FULFILLED';
const FETCH_AUTH_FULFILLED: FetchAuthFulfilled = 'FETCH_AUTH_FULFILLED';
interface FetchAuthFulfilledAction {
  type: FetchAuthFulfilled;
  authorized: boolean;
}

/**
 * Action creator for successful authorization
 */
const fetchAuthFulfilled = (authorized: boolean): FetchAuthFulfilledAction => ({
  type: FETCH_AUTH_FULFILLED,
  authorized,
});

/**
 * Auth reducer actions
 */
export type AuthActions =
  UpdateHostAction |
  UpdateCodeAction |
  FetchAuthFulfilledAction;

/**
 * Auth specific state
 */
export interface AuthState {
  host: string;
  code: string;
  authorized: boolean;
}

/**
 * Fetch auth epic
 */
export const fetchAuthEpic: Epic<AuthActions, State> = (action$, store) =>
  action$
    .filter(({ type }) => type === UPDATE_HOST || type === UPDATE_CODE)
    .mergeMap(() => {
      const {
        host,
        code,
      } = store.getState().auth;
      return new ShareText(host, code)
        .getAuth()
        .map(fetchAuthFulfilled);
    });

/**
 * Auth reducer
 */
export const auth = (state: AuthState = {
  code: '',
  host: '',
  authorized: false,
}, action: AuthActions): AuthState => {
  switch (action.type) {
    case UPDATE_HOST:
      return {
        ...state,
        host: action.host.startsWith('http') ?
          action.host :
          `http://${action.host}`
      };
    case UPDATE_CODE:
      return { ...state, code: action.code };
    case FETCH_AUTH_FULFILLED:
      return { ...state, authorized: action.authorized };
    default:
      return state;
  }
}
