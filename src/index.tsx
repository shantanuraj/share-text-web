/**
 * Root app file
 */

import 'photonkit/dist/css/photon.css';
import {
  h,
  render,
} from 'preact';

import App from './components/App';

render(<App />, document.body);
