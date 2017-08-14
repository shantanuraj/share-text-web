/**
 * Root app file
 */

import 'photonkit/dist/css/photon.css';
import {
  h,
  render,
} from 'preact';

// Patch Rx operators
import './utils/patch_operators';

import App from './components/App';

render(<App />, document.body);
