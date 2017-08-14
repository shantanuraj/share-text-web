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

import AuthView from './AuthView';
import TextsView from './TextsView';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Router>
      <AuthView path="/" />
      <TextsView path="/texts" />
    </Router>
  </Provider>
);
