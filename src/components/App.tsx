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
import AuthView from '../containers/AuthView';
import TextsView from './TextsView';

const store = configureStore();

const texts: ShareText.Text[] = [
  {
    date: 0,
    message: 'Lorem ipsum dolor sit amet.',
    sender: 'List item title',
  },
  {
    date: 0,
    message: 'Lorem ipsum dolor sit amet.',
    sender: 'List item title',
  },
  {
    date: 0,
    message: 'Lorem ipsum dolor sit amet.',
    sender: 'List item title',
  },
];

const App = () => (
  <Provider store={store}>
    <WindowEl>
      <Router>
        <AuthView path="/" />
        <TextsView path="/texts" texts={texts} />
      </Router>
    </WindowEl>
  </Provider>
);

export default App;
