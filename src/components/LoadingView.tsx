/**
 * LoadingView while texts are fetched
 */

import {
  h,
} from 'preact';

import {
  Icon,
  WindowContent,
} from './ProtonUI';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContet: 'center',
  },
};

const LoadingView = () => (
  <WindowContent style={styles.container}>
    <div>
      <Icon class="icon-hourglass" />
    </div>
  </WindowContent>
);

export default LoadingView;
