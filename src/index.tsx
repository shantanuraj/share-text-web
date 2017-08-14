/**
 * Root app file
 */

import {
  h,
  render,
} from 'preact';

import App from './components/App';

render(<App />, document.getElementById('app') as HTMLDivElement);
