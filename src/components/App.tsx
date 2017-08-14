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
import TextsView from './TextsView';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Router>
      <TextsView />
    </Router>
  </Provider>
);
