/**
 * Root app file
 */

import {
  h,
  render,
} from 'preact';

// Base photonkit css
import 'photonkit/dist/css/photon.css';
// Progress css
import './styles/progress.css';
// Messages css
import './styles/messages.css';

// Patch Rx operators
import './utils/patch_operators';

import App from './components/App';

render(<App />, document.body);
