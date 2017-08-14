/**
 * Auth component
 */

import {
  h,
} from 'preact';

import {
  WindowContent,
} from './ProtonUI';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const AuthView = (_props: {
  path: string;
}) => (
  <WindowContent style={styles.container}>
    <form>
      <div class="form-group">
        <label>Host</label>
        <input type="url" class="form-control" placeholder="Enter device IP and port" />
      </div>
      <div class="form-group">
        <label>Code</label>
        <input type="password" class="form-control" placeholder="Enter code from app" />
      </div>
    </form>
  </WindowContent>
);

export default AuthView;
