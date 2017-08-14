/**
 * App component
 */

import {
  h,
} from 'preact';
import {
  Provider,
} from 'preact-redux';

import configureStore from '../stores';
import TextsView from './TextsView';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <TextsView />
  </Provider>
);
