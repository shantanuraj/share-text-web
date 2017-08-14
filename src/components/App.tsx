/**
 * App component
 */

import {
  h,
} from 'preact';
import {
  Provider,
} from 'preact-redux';
import Router from 'preact-router';

import configureStore from '../stores';

import {
  WindowEl,
} from './ProtonUI';
import AuthView from './AuthView';
import TextsView from './TextsView';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <WindowEl>
      <Router>
        <AuthView path="/" />
        <TextsView path="/texts" />
      </Router>
    </WindowEl>
  </Provider>
);
